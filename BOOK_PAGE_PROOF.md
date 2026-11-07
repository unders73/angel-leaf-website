# Individual book pages — eight-book rollout

Status: desktop/mobile layout approved by Simon on 7 November 2026 and applied to all eight books. Each book now uses a separate border based on its own original cover. The former generic Literacy proof frame has been replaced by blue/yellow literacy artwork.

## Approved layout

Desktop: centred Angel Leaf brand, description at left, authentic cover and two original sample pages at right, nine country buttons underneath. Mobile: one screen, no scrolling, fanned artwork, tap-to-enlarge samples, nine country buttons. Shared CSS and JavaScript keep placement consistent. The previous preview-studio-literacy.html URL is retained with the corrected design.

The homepage, Activity collection, and Literacy/Numeracy collection HTML and artwork remain unchanged. Existing collection links already lead to the eight book routes below.

## Original source pages

| Book route | Interior PDF | PDF pages and titles |
| --- | --- | --- |
| book-activity.html | K-Pop Content -Angel_Leaf(3).pdf | 5: First Group Word Search; 25: Stage Outfit Studio |
| book-fun-facts.html | K-Pop Quiz Content - Angel_Leaf(1).pdf | 3: The Billion-View Breakthrough; 5: Know Your K-pop! |
| book-fan-journal.html | K-Pop Journal Content - Angel_Leaf.pdf | 9: Things to Remember; 37: My Musical Comfort Zone |
| book-release-tracker.html | K-Pop - Release & Review Content - Angel_Leaf(2).pdf | 42: Comeback Countdown; 60: Song Review |
| book-studio-literacy.html | K-Pop Literacy Studio Sessions Content - Angel_Leaf.pdf | 9: Meet the Word Families; 75: Set the Scene |
| book-world-literacy.html | LiteracyWorldTourInteriorFlat.pdf | 9: Word Families and a Press Release; 68: Plan an Interview with Room to Listen |
| book-studio-numeracy.html | Angel_Leaf_Numeracy_Interior_Final.pdf | 9: Build the Numbers; 73: Estimate, Then Measure |
| book-world-numeracy.html | Angel_Leaf_World_Tour_Interior.pdf | 22: Discounts Without the Hype; 64: Triangles and Parallelograms |

Every sample is a direct rasterisation of the original PDF at 1.8×. Covers remain the original assets. Images use object-fit: contain and retain their proportions; no interior text or artwork was redrawn. Decorative frame generation is documented in BOOK_ARTWORK.md.

## Purchasing links

The exact country order remains UK, US, Canada, Australia, Ireland, New Zealand, South Africa, South Korea and More countries. `assets/purchase-links.json` contains one empty country-to-URL map per book. Fill only with Simon's supplied links. No URLs were invented. Empty buttons explain that purchasing links are coming soon. More countries supports additional country entries in the same table.

## Validation

All eight pages checked at desktop 1363 × 936, compact desktop 900 × 700, mobile 390 × 844 and small mobile 320 × 568. Document dimensions equal viewport dimensions, all nine country buttons remain visible, and minimum phone button height is 46.734px. Desktop gallery and cover positioning are identical across all eight. Mobile header space is fixed to the approved dimensions to prevent variations in title text shifting the book position.

Original sample enlargement, next/previous navigation, close controls and country placeholder messages are checked in browser. Shared JavaScript passes node --check. Every cover/sample/flag/local link reference resolves. No existing homepage or collection layout edits were made.
