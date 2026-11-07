(() => {
  const root = document.documentElement;
  const site = document.querySelector('.site');
  if (!site) return;

  function fitCollection() {
    if (root.dataset.view === 'mobile' || window.innerWidth <= 680) {
      delete root.dataset.collectionFit;
      site.style.removeProperty('--collection-scale');
      return;
    }

    root.dataset.collectionFit = 'desktop';
    site.style.setProperty('--collection-scale', '1');
    const bounds = site.getBoundingClientRect();
    const scale = Math.min(
      1,
      document.body.clientWidth / bounds.width,
      document.body.clientHeight / bounds.height
    );
    site.style.setProperty('--collection-scale', String(scale));
  }

  fitCollection();
  window.addEventListener('resize', fitCollection);
  window.addEventListener('pageshow', fitCollection);
})();
