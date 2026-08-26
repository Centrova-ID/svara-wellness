# Non-SPA refactor

The site now uses native document anchors for all internal navigation, so moving between The House, Treatments, The Method, Journal, Contact, and the home page triggers a full document load instead of SPA-style client interception. Shared routing remains only as the render map for direct URL entry and the server fallback.

| Task | Status |
|---|---|
| Replace client-side route switching with independent page-style navigation | Complete |
| Update shared navigation to use full-page document links | Complete |
| Preserve visual styles, generated assets, and page layouts | Complete |
| Verify direct URL loading and production build | Complete — type-check and production build pass |
