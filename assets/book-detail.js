const book=JSON.parse(document.getElementById('book-data').textContent);
const bookImages=book.images;
const lightbox=document.getElementById('lightbox'),largeImage=document.getElementById('large-image'),shopDialog=document.getElementById('shop-dialog');let imageIndex=0;
function visibleImageIndices(){return [...document.querySelectorAll('.gallery [data-open-image]')].filter(el=>getComputedStyle(el).display!=='none').map(el=>Number(el.dataset.openImage));}
function showImage(i){const visible=visibleImageIndices();imageIndex=visible.includes(i)?i:visible[0];const image=bookImages[imageIndex];largeImage.src=image.src;largeImage.alt=image.title;document.getElementById('image-title').textContent=image.title;document.getElementById('image-position').textContent=(visible.indexOf(imageIndex)+1)+' / '+visible.length;if(!lightbox.open)lightbox.showModal();}
function stepImage(direction){const visible=visibleImageIndices();showImage(visible[(visible.indexOf(imageIndex)+direction+visible.length)%visible.length]);}
document.querySelectorAll('[data-open-image]').forEach(b=>b.addEventListener('click',()=>showImage(Number(b.dataset.openImage))));
document.querySelector('.lightbox .close').addEventListener('click',()=>lightbox.close());document.getElementById('previous-image').addEventListener('click',()=>stepImage(-1));document.getElementById('next-image').addEventListener('click',()=>stepImage(1));
lightbox.addEventListener('keydown',e=>{if(e.key==='ArrowRight')stepImage(1);if(e.key==='ArrowLeft')stepImage(-1)});lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});
const storeData=fetch('assets/purchase-links.json',{cache:'no-store'}).then(r=>r.ok?r.json():{}).catch(()=>({}));
const storeLinks=storeData.then(data=>data.books?.[book.id]||{});
function safeStoreLink(value){try{const url=new URL(value);return url.protocol==='https:'?url.href:null}catch{return null}}
function appendStoreOption(container,label,url){const a=document.createElement('a');a.className='store-extra';a.textContent=label;a.href=url;container.append(a)}
document.querySelectorAll('[data-country]').forEach(b=>b.addEventListener('click',async()=>{
 const country=b.dataset.country,links=await storeLinks,url=safeStoreLink(links[country]);
 if(url){location.assign(url);return}
 document.getElementById('country-title').textContent=country;
 const message=document.getElementById('country-message');message.replaceChildren();
 const data=await storeData;
 const international=(data.international_routes?.[country]||[]).map(name=>[name,safeStoreLink(links[name])]).filter(([,value])=>value);
 if(international.length){
  message.append('Choose an Amazon store below, then set your delivery country to '+country+' to check availability and postage.');
  for(const [name,value] of international)appendStoreOption(message,'Check Amazon '+name,value);
 }else if(country==='More countries'){
  const primary=new Set([...document.querySelectorAll('[data-country]')].map(el=>el.dataset.country));
  const extra=Object.entries(links).filter(([name,value])=>!primary.has(name)&&safeStoreLink(value));
  if(extra.length){
   message.append('Choose your Amazon store. Amazon confirms availability and delivery.');
   for(const [name,value] of extra)appendStoreOption(message,name,safeStoreLink(value));
  }else message.textContent='Additional country purchasing links are coming soon.';
 }else message.textContent='The '+country+' purchasing link for '+book.title+' is coming soon. Please check back.';
 shopDialog.showModal();
}));
document.getElementById('close-country').addEventListener('click',()=>shopDialog.close());shopDialog.addEventListener('click',e=>{if(e.target===shopDialog)shopDialog.close()});document.getElementById('choose-store').addEventListener('click',()=>document.querySelector('.country').focus({preventScroll:true}));
