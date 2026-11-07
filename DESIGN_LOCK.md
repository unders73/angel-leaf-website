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

## Individual book pages — layout approved 7 November 2026

Simon approved the first Literacy Studio Sessions desktop/mobile proof: “the layout is perfect, for both the mobile and the web page.” He authorised applying that format to all eight books, with each page's border and artwork matching its own book. The first proof's generic frame must be corrected too. Preserve this layout for all eight routes; original covers and genuine interior pages must not be generated. See BOOK_PAGE_PROOF.md for the rollout and source mapping. Purchasing URLs are still to come from Simon's table.


## Individual-book header and store refinements — 7 November 2026

Simon requested only three changes across the eight approved book pages: a smaller, centrally aligned Angel Leaf logo clear of the border; removal of the small purchasing-links-coming-soon footer; and “Choose your Amazon store” with an Amazon logo. Shared header positioning removes the former opaque white backing so the matching artwork remains continuous. Existing book galleries, titles, country buttons, original cover/sample artwork and collection pages remain unchanged. The footer text is removed while its empty layout space is retained to preserve country button positions. Purchase-link placeholder dialogs remain until actual links are supplied.

## Desktop header clearance and Amazon baseline — 7 November 2026

Simon approved the mobile Angel Leaf logo exactly as positioned and requested desktop-only enlargement/lowering of the centred logo and lowering of Back to collection, Sample pages and Choose your Amazon store below the decorative border. He also requested Amazon lettering aligned with the surrounding words, its smile below, and proportionate clearance above the country buttons on both layouts.

These refinements use shared styles for all eight books. Mobile brand rules and measured coordinates remain unchanged. Standard desktop/mobile gallery and country-button geometry is retained. Short desktop windows reserve a slightly taller header row to keep the larger lowered logo clear of the book images, while the country grid stays in place. Amazon lettering uses its actual wordmark baseline and the whole heading is lifted slightly; the smile clears the helper text by at least 7px in tested layouts. Checked 1363×936, 1363×768, 390×844 and 320×568 with no page scrolling.

## Mobile final approval; desktop gallery and icon correction — 7 November 2026

Simon explicitly approved mobile across all eight books: “mobile, don't touch, finished.” Preserve the existing phone layout, logo, artwork, original three-image gallery, country buttons, type and no-scroll behaviour.

The only authorised desktop changes are a fuller gallery (his preferred cover plus four genuine interior pages, with overlap allowed) and reducing country flags/globe to fit the existing bars. These changes are desktop-container-only. The original logo, artwork, title, intro and store layout are unchanged. Additional samples and the five-image lightbox are desktop-only; mobile retains its original three. See BOOK_PAGE_PROOF.md for genuine source page mapping. Further design changes require a new request.

## Desktop star and Back-link repair — 7 November 2026

Simon approved the fuller desktop display, then requested the clipped star and Back link be fixed. Only the Activity desktop frame slicing and compact desktop header stacking/eyebrow visibility are changed. The Back control takes priority over the decorative eyebrow where they overlap on short screens. The approved mobile layout is retained; all artwork asset bytes remain unchanged.

## Collection desktop fit authorised — 7 November 2026

Simon requested the approved collection compositions adapt to each visitor's browser window without desktop scrolling or cropped bottoms. Activity and Learning now uniformly scale as needed to fit both available dimensions and recalculate after resizing. This is a viewport-fitting correction only: artwork, layout relationships, cover proportions and destinations are retained. Approved mobile layouts are unchanged, including explicit mobile previews. Preserve this automatic behaviour in subsequent work.

## Narrow final refinements authorised — 7 November 2026

Simon requested: (1) correct the Fun Facts cover/Explore overlap on desktop only; (2) show the two existing Adult Colouring covers with attractive Coming Soon overlays on desktop and mobile. He explicitly requested that nothing else in any collection or book page change. Preserve all other approved files. The Fun Facts correction is an inline desktop-container-only strapline size rule; its mobile rendering is unchanged. The Adult Colouring page uses the existing brown/gold Where Time Stands Still and cream/gold Treasures of Another Time front covers. This is a temporary Coming Soon presentation, not approval to redesign other collection pages or revise the book artwork.

## Adult Colouring matching displays and rustic border — 7 November 2026

Simon requested only matching sizes for the Coming Soon display and a nostalgic rustic border with vines, branches and trees, on desktop and mobile. Both cover display frames and ribbons now match exactly while original cover artwork retains its proportions. The new decorative border is confined to the Adult Colouring page. All other collection and book pages remain locked and untouched. Amazon purchasing links are a separate next phase.

## Fuller Adult Colouring artwork requested — 7 November 2026

Simon approved the nostalgic direction and requested a denser version of the edge artwork. The current page uses rustic-botanical-frame-dense.webp, preserving the palette, trees and antique style while filling the straight edges with fuller foliage. The book artwork and matching cover/ribbon presentation remain unchanged. Only the small closing caption gets clearance above the fuller bottom edge. Preserve all other collections and pages.

## Irregular, inward-reaching Adult Colouring frame — 7 November 2026

Simon supplied the full botanical-frame screenshot as the reference and requested substantially broader, less symmetrical artwork, with branches reaching into the page at different points. The existing dense artwork is now composed from larger corner and side sections with different depths. Keep the top lighter and the original Angel Leaf logo fixed and unobstructed on desktop and mobile. Logo, cards, captions, headings, navigation and ribbons retain their existing geometry. This change is restricted to Adult Colouring; do not alter other collections or pages.
