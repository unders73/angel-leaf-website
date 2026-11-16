# Amazon purchasing links

Updated 16 November 2026. Simon supplied the first six identifiers on 4 November and the two World Tour Amazon US product links on 14 November, confirming that all eight K-pop books are published. These are supplied destinations, not independent stock or delivery checks.

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
| Where Time Stands Still | B0HRV6P7GL | 14 regional Amazon stores, plus existing international delivery-check choices | Source updated; Firebase release still required |
| Treasures of Another Time | B0HRTZ7SNJ | 14 regional Amazon stores, plus existing international delivery-check choices | Source updated; Firebase release still required |

Both collection covers and titles now lead to book-specific purchase pages. Their Coming Soon ribbons are removed; the remaining four adult books retain theirs. Existing collection cover assets, proportions, typography, artwork and layout rules are preserved. The old Where Time placeholder's broken image is replaced by the approved collection cover. Both purchase pages use real HTML links and native expandable country lists, so Amazon choices work without JavaScript. Back to collection reopens Curious Wonderings on mobile. Existing Metricool tracking is retained on the collection and included on both purchase pages.

The source audit checks all 140 regional mappings against exact country domains and book identifiers, confirms all 112 K-pop mappings are unchanged, checks both collection-to-book routes, 18 actual purchase anchors per new page (14 stores plus four international repeats), and verifies local asset/navigation references. Amazon stock, price and delivery remain customer-address-specific and are not certified by these URL checks. Local browser preview access was unavailable in this session; a successful source audit is not a claim of completed visual or live Firebase verification.

Publishing remains separate from pushing to GitHub. The successful Firebase deployment in Simon's screenshot used the Cloud Shell account shown as `angel_leaf_admin`; the earlier failed attempts used a different account. No authenticated Firebase CLI or Google Cloud credentials are available in this workspace. Verify the live Firebase pages after deployment before marking either title live there.
