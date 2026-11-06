# Angel Leaf approved designs

Updated 6 November 2026 after Simon's desktop cover-proportion and mobile button corrections.

The latest approval supersedes the earlier 1448 × 1086 desktop / 1024 × 1536 mobile artwork selection. Simon explicitly approved the FIRST wide laptop/PC preview (18:51), rejected the second desktop preview with broader foliage margins, and requested ONLY aligning the green buttons down the right. He accepted the latest portrait mobile preview. Do not redesign these layouts.

## Active approved assets

- Desktop: `assets/opening-desktop-approved.png`, 1854 × 848. Exact original `Angel Leaf book collections.png` preview. SHA-256: `a615b406e39930cb032477f7aac8e3f34e60532f567240701d2b0ed81fb16802`.
- Mobile: `assets/opening-mobile-approved.png`, 887 × 1774. Exact original `Angel Leaf mobile book collections preview.png`. SHA-256: `d3c599f361ab644ab70a186abbfd49d8e5c7bc8a7fc45446a287b1c07939404d`.

Both artwork files remain byte-identical to the accepted previews. The desktop's green arrow controls are overlaid with equal CSS dimensions and the same horizontal coordinate. Only the arrow control regions change. The original assets remain intact. Subsequent authorised corrections are implemented as page overlays, described below.

Uniform image scaling preserves the approved proportions. The entire opening page fits the viewport without scrolling. Automatic portrait mobile selection applies below 681px; query links `?view=desktop` and `?view=mobile` explicitly select the requested layout for review. Neither view is a stretched version of the other.

Keep the subtle arrow lift and press response. All three row links lead to their existing collection pages. Previous artwork assets are retained for history but are no longer the active homepage artwork.

## Latest authorised corrections

Simon confirmed that the mobile page fills the screen correctly. Preserve its sizing and the no-scroll layout.

- Mobile: make the top two buttons match the smaller bottom button and align all three. All three now use the exact original bottom-button crop, at x=775 and 88 × 92 artwork pixels. Only the former larger button regions receive matching background patches. Books and all other mobile artwork remain unchanged.
- Desktop: the covers embedded in the approved wide artwork were too wide. Narrow only the ten cover tiles around their existing horizontal centres, retaining their heights and original cover content. The eight upright covers now have approximately the natural 8.5:11 ratio; the two angled adult covers retain their tilt. Matching subtle panel backgrounds fill the spaces exposed around the narrowed covers.
- Keep the logo, title, description, people, collection labels, border, desktop arrows, links and page-fit CSS unchanged.
- Do not regenerate or redesign the opening page.

Next: Simon will test the corrected links, then we will build the collection page behind the opening page.

## K-pop Activity collection desktop approval — 6 November 2026

Simon explicitly approved the desktop in activity.html: “Yes, desktop approved. Leave it like that.” The approved desktop version is commit 3b1f7247379d1b744a4b92837fc7fec185ffbe68, with K-pop left, Activity Collection centred on the page and its instruction directly underneath, and the smaller Angel Leaf logo centred over the red book. Preserve all desktop layout, lettering, logo, cover proportions and lower artwork.

The only subsequently authorised change is mobile: show the existing pink Activity Collection lettering asset instead of the black text, keeping the heading centred and everything else unchanged. This is implemented with CSS confined to mobile container rules. Simon will look at this mobile update before locking both views together. Do not infer final mobile approval before that review.

## Activity collection retained as reference; learning collection review

Simon has moved on to the Literacy & Numeracy collection and instructed reuse of the finished Activity desktop/mobile format. Preserve activity.html and all its artwork unchanged. The new learning.html adapts book covers, title wording/colour and surrounding illustrations only. Its final approval is recorded below. Do not change the approved homepage or Activity page while revising learning.html.

## Literacy & Numeracy collection — desktop and mobile locked

Simon explicitly approved both corrected views: “Yes, lock in please, thank you.”

Approved source: commit 909039c4052e1d043a29220939e834cecbd7f7b2, learning.html and its referenced image assets.

- Desktop: https://unders73.github.io/angel-leaf-website/learning.html?v=20261106-learning-aligned
- Mobile: https://unders73.github.io/angel-leaf-website/learning.html?view=mobile&v=20261106-learning-aligned
- Preserve both layouts, lettering, logo, colours, book order, original cover proportions and positions, white margins, panel dimensions, artwork scale and navigation.
- Verified book and panel geometry matches Activity at 1363 × 936, 390 × 844 and 320 × 740. Mobile figures are centred and bottom-anchored at 88%; base-scene fade is 48–58%, clearing heads and microphones beneath the Literacy covers.
- Do not redesign or adjust these approved views unless Simon explicitly requests a further change. Preserve them when building the remaining collection and individual book pages.
- This approval concerns the collection page. Individual book detail drafts and country purchase links remain unfinished.
