# Amazon purchasing links

Updated 17 November 2026. Simon supplied the first six identifiers on 4 November and the two World Tour Amazon US product links on 14 November, confirming that all eight K-pop books are published. These are supplied destinations, not independent stock or delivery checks.

| Book | ASIN | UK | US |
| --- | --- | --- | --- |
| K-pop Activity Book | B0HP25B3L8 | [Amazon UK](https://www.amazon.co.uk/dp/B0HP25B3L8) | [Amazon US](https://www.amazon.com/dp/B0HP25B3L8) |
| K-pop Fun Facts | B0HP64CHY1 | [Amazon UK](https://www.amazon.co.uk/dp/B0HP64CHY1) | [Amazon US](https://www.amazon.com/dp/B0HP64CHY1) |
| K-pop Fan Journal | B0HP7X9TMT | [Amazon UK](https://www.amazon.co.uk/dp/B0HP7X9TMT) | [Amazon US](https://www.amazon.com/dp/B0HP7X9TMT) |
| K-pop Release Tracker & Review Book | B0HP8D7TCQ | [Amazon UK](https://www.amazon.co.uk/dp/B0HP8D7TCQ) | [Amazon US](https://www.amazon.com/dp/B0HP8D7TCQ) |
| K-pop Literacy — Studio Sessions | B0HQ6B61GK | [Amazon UK](https://www.amazon.co.uk/dp/B0HQ6B61GK) | [Amazon US](https://www.amazon.com/dp/B0HQ6B61GK) |
| K-pop Numeracy — Studio Sessions | B0HQ2Z4C5L | [Amazon UK](https://www.amazon.co.uk/dp/B0HQ2Z4C5L) | [Amazon US](https://www.amazon.com/dp/B0HQ2Z4C5L) |
| K-pop Literacy — World Tour | B0HQZG2NK3 | [Amazon UK](https://www.amazon.co.uk/dp/B0HQZG2NK3) | [Amazon US](https://www.amazon.com/dp/B0HQZG2NK3) |
| K-pop Numeracy — World Tour | B0HQZ9SG9N | [Amazon UK](https://www.amazon.co.uk/dp/B0HQZ9SG9N) | [Amazon US](https://www.amazon.com/dp/B0HQZ9SG9N) |

## Regional links — completed 7 November 2026

Simon correctly clarified that the same book code can be used with each Amazon store address. KDP explicitly documents the /dp/ASIN pattern: https://kdp.amazon.com/en_US/help/topic/G200652190 . Its current paperback distribution list is https://kdp.amazon.com/en_US/help/topic/G201834280 . The six supplied ASINs now generate 84 links across these 14 supported paperback marketplaces:

| Country | Amazon store | Website route |
| --- | --- | --- |
| United Kingdom | www.amazon.co.uk | Main country button |
| United States | www.amazon.com | Main country button |
| Canada | www.amazon.ca | Main country button |
| Australia | www.amazon.com.au | Main country button |
| Ireland | www.amazon.ie | Main country button |
| Germany | www.amazon.de | More countries |
| France | www.amazon.fr | More countries |
| Spain | www.amazon.es | More countries |
| Italy | www.amazon.it | More countries |
| Netherlands | www.amazon.nl | More countries |
| Poland | www.amazon.pl | More countries |
| Sweden | www.amazon.se | More countries |
| Belgium | www.amazon.com.be | More countries |
| Japan | www.amazon.co.jp | More countries |

New Zealand, South Africa and South Korea have no local store in KDP's supported paperback distribution list. Those buttons open the existing country dialog with same-book links and a request to set the delivery country on Amazon to check availability and postage. New Zealand offers Amazon Australia; South Africa offers Amazon UK and US; South Korea offers Amazon US. These are explicitly delivery-check options, not a promise of shipping eligibility. No unsupported local KDP storefront is implied.

## Verification and limits

All 84 regional URLs were checked for exact country domain and the correct supplied ASIN. A functional check exercised all nine buttons across all eight books (72 flows), confirming direct links, international store choices, nine extra marketplaces and unchanged Coming soon behavior for both unpublished books. The More countries dialog fits and scrolls within a 320x568 phone viewport; its close control remains reachable. No Amazon stock or checkout availability claim is made.

The Activity UK button was previously clicked in the site and reached the exact supplied URL. Amazon rejected that browser session/client, so product identity, format, stock, price and delivery have not been independently confirmed. Standard regional link construction is now based on Amazon's documented pattern rather than treating the inability to inspect stock as a reason to leave the links blank.

## World Tour publication correction — 14 November 2026

Both World Tour maps were still empty after publication, so their nine country buttons each ended in a Coming soon message. Simon supplied the exact Amazon US listings: Literacy `B0HQZG2NK3`, Numeracy `B0HQZ9SG9N`. The two maps now use those identifiers across the same 14 supported marketplaces, bringing the catalogue to 112 regional product URLs. Existing New Zealand, South Africa and South Korea choices now resolve for World Tour too. The other six books' maps are unchanged.

The 14 November pre-fix audit verified that the homepage, both K-pop collections and all eight book pages returned HTTP 200 and matched current source. All 72 country-button paths were exercised against the shared JavaScript. The post-fix check passed all 72 country-button paths using the prepared data and shared JavaScript, with 14 correct destinations per book and no Coming soon outcomes. All 112 product URLs match the identifiers in the table above; a nonempty map alone is not sufficient.

Only purchase data and this record change. HTML, shared JavaScript, CSS, images and layout are unchanged. The shared code fetches purchase data with `cache: 'no-store'`; no HTML or script cache bump is needed. A GitHub push does not publish Firebase: run the existing Hosting deployment and verify the live purchase JSON before describing the fix as live.

The purchase-data fetch uses cache:no-store, and the shared script query is regional-links-20261107 on the eight book routes and retained Literacy preview. Only link data, dialog behavior and script query strings changed. All page layouts, CSS, covers, sample pages, borders, logos and the Adult Colouring page remain unchanged.

## Curious Wonderings publication links — 16 November 2026

| Book | Supplied ASIN | Country routes | Publication state |
| --- | --- | --- | --- |
| Where Time Stands Still | B0HRV6P7GL | 14 regional Amazon stores, plus existing international delivery-check choices | Live on Firebase and GitHub Pages; Firebase verified 17 November 2026 |
| Treasures of Another Time | B0HRTZ7SNJ | 14 regional Amazon stores, plus existing international delivery-check choices | Live on Firebase and GitHub Pages; Firebase verified 17 November 2026 |

Both collection covers and titles now lead to book-specific purchase pages. Their Coming Soon ribbons are removed; the remaining four adult books retain theirs. Existing collection cover assets, proportions, typography, artwork and layout rules are preserved. The old Where Time placeholder's broken image is replaced by the approved collection cover. Both purchase pages use real HTML links and native expandable country lists, so Amazon choices work without JavaScript. Back to collection reopens Curious Wonderings on mobile. Existing Metricool tracking is retained on the collection and included on both purchase pages.

The source audit checks all 140 regional mappings against exact country domains and book identifiers, confirms all 112 K-pop mappings are unchanged, checks both collection-to-book routes, 18 actual purchase anchors per new page (14 stores plus four international repeats), and verifies local asset/navigation references. Amazon stock, price and delivery remain customer-address-specific and are not certified by these URL checks. Local browser preview access was unavailable in this session; a successful source audit is not a claim of completed visual or live Firebase verification.

Publishing remains separate from pushing to GitHub. The successful Firebase deployment in Simon's screenshot used the Cloud Shell account shown as `angel_leaf_admin`; the earlier failed attempts used a different account. No authenticated Firebase CLI or Google Cloud credentials are available in this workspace. Verify the live Firebase pages after deployment before marking either title live there.

GitHub Pages release `117b5c1743a232ca709ee6493a46349d0ffa4130` completed successfully. Both collection links were followed in the browser; both covers loaded; all four expandable store groups on each book exposed the expected destinations (18 purchase anchors per page, including international repeats). Desktop collection geometry matched the previous release for all covers, book headings, range headings and logo; the only removed cover text was the two requested Coming Soon ribbons. The collection's built-in 430px mobile preview showed both available titles, functioning links and the selected Curious Wonderings tab. This preview is not a full phone-viewport test of the two new purchase pages.

On 16 November, the public Firebase collection still served the previous version after the GitHub push. GitHub Pages provided the working fallback pending the separate Firebase deployment.

## Firebase release verified — 17 November 2026

Simon supplied a successful Cloud Shell deployment screenshot from `angel_leaf_admin` showing 169 files and Deploy complete. A fresh independent HTTP check of https://angelleaf.web.app/ verified the collection, both new book pages, shared purchase data and adult purchase stylesheet all return HTTP 200. Both collection-to-book anchors are present; both purchase pages contain all 14 exact regional destinations using the supplied ASINs and no Coming Soon text. The collection retains four ribbons for the other adult titles. All 140 published country/ASIN mappings were checked, including all 112 existing K-pop mappings. The two requested book updates are now live on the primary Firebase website. This verifies website links, not Amazon stock or delivery eligibility. No further deployment is needed for this documentation-only record.

## Current design correction — 17 November 2026

Simon rejected the plain adult purchase pages as inconsistent with the approved K-pop format. The purchase links were live, but the visual work was not complete. The replacement pages now reuse the shared book-page layout and purchasing behaviour, with the approved adult botanical frame, warm brown/cream theme, original covers, and eight country flags plus the globe. No collection, K-pop page, shared K-pop styling/script, or purchase identifier was changed.

The replacement is available for review at `preview-colouring-purchases.html`; Simon explicitly approved this revision on 17 November 2026 and instructed publication. Firebase publication was subsequently completed and independently verified on the same date. Keep this distinct from the earlier successful link deployment.

Both books were checked in real browser frames at 1366×768, 900×600, 390×844 and 320×568. All eight checks had document dimensions equal to the viewport, all nine country controls within the screen, eight flags, and the intro clear of the store section. Phone buttons were at least 51px high. The small-phone More countries dialog displayed nine additional stores with its close button in view. Final desktop/phone screenshots and measurements are in `reviews/colouring-purchases-20261117/`. The original border asset and cover images were reused; no artwork or faces were regenerated. The consistency requirement was also saved and verified in Simon's standing working instructions.

## Approved release — 17 November 2026

Simon explicitly approved the desktop/mobile proofs with “Yes, approved. Please LEARN from this. Go”. The approved runtime files are those at commit `d6eb944621dbe59a9fd45e4da9cbfaf1f71c7d1e`: both adult book HTML pages and `assets/colouring-book.css`. Preserve the exact approved botanical border, warm theme, original covers, flag buttons and one-screen layout. Source approval, Firebase publication and fresh live verification are complete as of 17 November 2026. The approval-record commit changes documentation only.

## Approved design live — verified 17 November 2026

After Simon reported “It is done”, fresh requests to the primary https://angelleaf.web.app/ site confirmed that both adult purchase pages, adult stylesheet, shared book stylesheet and script, purchase data, collection page and botanical frame asset return HTTP 200 and match the approved checked source bytes exactly. Both pages have the approved themed layout, the correct frame reference, eight flags, nine country controls and fourteen same-book regional store destinations. The no-scroll desktop/phone measurements and approved screenshots for this exact runtime remain applicable. The approved design is now published and verified on the primary website; no further user action is outstanding for these two pages. This record changes documentation only and requires no additional deployment.

## Gentle Moments publication — 23 November 2026

Simon supplied both published Amazon links and authorised removing their Coming Soon banners. Amazon product-image endpoints were retrieved and visually read to verify Postcards from the Coast = B0HSMBKLG1 and Journeys of Yesterday = B0HSLBN4MK (listing HTML requests returned 503). Two new pages reuse the approved 17 November adult purchase template and original covers with no artwork changes. Each has 14 regional destinations, eight flag buttons and the existing international delivery routes. Collection overlays are removed only for these two titles; Hidden Details retains its banners. Existing ten books and their 140 regional destinations are unchanged. Structural and browser checks passed. Both pages fit without document scrolling at 1366×768, 900×600, 390×844 and 320×568. Desktop and phone visuals, collection navigation and nine additional More countries links were checked. GitHub Pages deployment succeeded and both pages, collection and purchase data matched local checked bytes. Primary Firebase still serves the previous collection; deployment remains pending because this session has no Firebase credentials. Simon needs to run the hosting deployment in the authorised angel_leaf_admin Cloud Shell account. Store stock/delivery is confirmed by Amazon at purchase time, not by these URL checks.
