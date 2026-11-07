# Angel Leaf Firebase Hosting

## Current hosting

- Public address: https://angelleaf.web.app/
- Project and Hosting site ID: `angelleaf`
- Hosting product: classic Firebase Hosting for static files, not Firebase App Hosting.
- Plan: no-cost Spark. Billing was confirmed disabled, with no billing account attached.
- Source: this repository, branch `main`; website files live at the repository root.
- Existing GitHub Pages address remains working as a fallback. It has not been redirected or deleted.
- Do not add Firebase SDKs, change page layouts, optimise/recreate artwork, enable paid services, or create a new project as part of routine publishing.

## Migration verification — 7 November 2026

Transferred the approved GitHub commit `c757c4aa628bbdd77c74599a3229fd492aa6de82` (124 files, approximately 36.77 MB). Every file was verified against its Git blob hash before transfer. The only changes to website HTML are the eight book pages' invisible canonical URLs, changed to the new primary domain; page bodies, CSS, JavaScript, purchase links and all artwork are unchanged.

The preview channel `transfer-check` (version `46b10629e2747149`, expiring after one day) was checked before cloning its content to the live channel. All 124 preview responses matched the prepared files byte for byte.

Browser comparisons passed for all 15 HTML pages at 1366 × 768 and 390 × 844. The 12 active homepage/collection/book routes also matched at 1366 × 600, 1920 × 1080 and 320 × 568: 66 comparisons in total. Compared rendered text, document dimensions, every rendered element's geometry and image loading/dimensions. Representative desktop and mobile screens were inspected visually. Legacy unlinked draft pages were copied unchanged; these checks establish migration parity, not redesign or repair of those drafts.

Tested homepage-to-collection-to-book navigation, the page Back link, browser Back, desktop and mobile image viewers, international Amazon selection dialogs and the World Tour coming-soon message. The purchase-links JSON is unchanged. This does not newly certify stock or international shipping on Amazon; Amazon confirms those for each customer.

## Publishing future updates

Use Node 20 or newer and the official Firebase CLI, signed into the authorised project-owner account. Keep authentication in the CLI's normal credential store; never commit credentials, tokens, service-account keys or debug logs.

1. Start from the current `main` branch and apply only the requested content changes.
2. Use the repository-root `firebase.json` and `.firebaserc`. No compilation is needed. Do not run an init command that overwrites existing pages.
3. Commit and push source changes to GitHub using the normal repository workflow.
4. Deploy a preview:

   ```sh
   npx -y firebase-tools@latest hosting:channel:deploy review --expires 1d --project angelleaf
   ```

5. Check the returned preview URL against the approved layouts and exercise affected links.
6. Publish the checked version:

   ```sh
   npx -y firebase-tools@latest hosting:clone angelleaf:review angelleaf:live --project angelleaf
   ```

7. Verify https://angelleaf.web.app/ and any changed deep links.

A GitHub push currently updates GitHub Pages only. It does **not** automatically deploy Firebase. Run the Firebase publish step for every website update. No GitHub service-account secret or new CI workflow was introduced during migration.

## Scope retained

The eight K-pop pages keep their approved cover-plus-four-sample desktop galleries and three-image mobile galleries. Adult Colouring keeps its approved border, equal cover presentation and raised second mobile book/caption. World Tour purchase links remain coming soon until supplied/verified. Future TV, products, accessories, education and app sections are separate future work.
