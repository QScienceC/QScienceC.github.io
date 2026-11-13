# QSC website

Static HTML site served by GitHub Pages at https://www.qsc.earth (see `CNAME`). There is no build step: pages are edited directly.

## URLs and the sitemap

- Every absolute URL to this site uses `https://www.qsc.earth/...`, with `www`: canonical tags, `og:url`, `og:image`, structured data (JSON-LD), and `sitemap.xml`. The bare `qsc.earth` only redirects to `www`, so a URL without `www` points search engines at a redirect.
- A new public page gets a canonical tag, Open Graph and Twitter tags, and an entry in `sitemap.xml`.
- When a page's content changes in a meaningful way, update its `<lastmod>` in `sitemap.xml`. Changes to the header, footer, or meta tags don't count.
- Link to the WildObserve landing page as `WildObserve/` (or `./` from inside `WildObserve/`), not `WildObserve/index.html`.
- Blog posts exported from Jupyter put a template inside `<body>`. Their canonical tag belongs in `<head>` only.

## Keep these in sync

The WildObserve pages carry structured data (JSON-LD in each page's `<head>`) that repeats facts shown on the pages. When one side changes, change the other in the same commit.

### WildObserve prices

Prices are in three places:

1. The plan cards in `WildObserve/plans.html`.
2. The "Compare the plans" table in `WildObserve/plans.html`.
3. The `offers` list in the JSON-LD of `WildObserve/index.html`. Prices there are plain numbers in USD with no comma, such as `"1995"`. Paid plans also have a `priceSpecification` with `"unitText": "year"`. Add or remove an `Offer` when a plan is added or removed.

### WildObserve user guide videos

Each `<video>` in `WildObserve/user_guide.html` has a matching `VideoObject` in the `video` list of that page's JSON-LD. Add, change, or remove them together. Each `VideoObject` has:

- `name` and `description`, matching the video's YouTube title and description.
- `thumbnailUrl`: the video's poster image. `contentUrl`: the `.mp4` file. Both are absolute `https://www.qsc.earth/...` URLs.
- `uploadDate`: when the video was added to the guide, in ISO 8601 (`git log --diff-filter=A --format=%aI -- <file>`).
- `duration`: in ISO 8601, such as `PT1M14S` (`ffprobe -v error -show_entries format=duration -of csv=p=0 <file>`).
- `sameAs`: the video's YouTube URL. The videos are in the "WildObserve Instructions" playlist on the WildObserve YouTube channel.

### WildObserve landing page facts

The `SoftwareApplication` JSON-LD in `WildObserve/index.html` repeats the landing page's features (`featureList`), operating systems, and download links. If those change on the page, update the JSON-LD.

### The WildObserve landing page video

The video above the FAQ in `WildObserve/index.html` (`<section id="video">`, where "Watch it in action" at the top of the page jumps) is a YouTube video shown behind a poster (`images/videos/reviewing.jpg`, its YouTube thumbnail saved to the site). Nothing loads from YouTube until someone clicks it. It's also in the `VideoObject` JSON-LD in that page's `<head>`. To change the video, update the link, `data-youtube-id`, the poster, the caption under it, and the `VideoObject` (name, description, thumbnails, `uploadDate`, `duration`, `embedUrl`, `sameAs`).

### The WildObserve FAQ

The FAQ section of `WildObserve/index.html` (`<section id="faq">`) is repeated word for word, as plain text, in the `FAQPage` JSON-LD in that page's `<head>`. When a question or answer changes, change both. The answers repeat facts from elsewhere: plans and prices, system requirements, export formats, and the preprints' numbers. When one of those changes, check the FAQ too.

### The comparison page

`WildObserve/compare.html` compares WildObserve with Timelapse, AddaxAI, Wildlife Insights, and AIDE.

- Every entry about another tool comes from that tool's own website or documentation, listed under Sources on the page. Never fill one in from memory, a review, or another site.
- A dash means the tool's documentation doesn't say.
- Don't claim WildObserve is the only tool that does something: that depends on what the others don't document.
- When re-checking, update the "Last checked" date and the Sources date together.
- The WildObserve column repeats facts from elsewhere (prices, platforms, features, exports). Update it when those change.

### The WildObserve preprints

Two preprints are linked in `WildObserve/index.html`:

- "WildObserve: Camera-trap software that learns species labels during review and estimates occupancy and abundance" (bioRxiv, DOI `10.64898/2026.10.06.757089`).
- "Which camera-trap images to review? Estimating occupancy from a small part of a survey" (EcoEvoRxiv, DOI `10.32942/X20M63`). The "Tells you which images to review" bullet quotes its results.

Each is in two places: the line under the "What WildObserve does" list, and `subjectOf` in the JSON-LD. Link them by DOI (`https://doi.org/...`), which always leads to the newest version. If one is published in a journal, update its title, link, and citation in both places, and check that any numbers quoted on the page still match. The user guide's occupancy references also cite the EcoEvoRxiv preprint.

## Personal details

Mikey Tabak's GitHub account and ORCID appear only in JSON-LD: the `Person` entry, which is in both `about.html` and `WildObserve/index.html`. Keep the two entries the same. Never put them in visible page text.

## Checking changes

- After editing JSON-LD, make sure each block still parses as JSON.
- After a change is live, test the page with Google's Rich Results Test: https://search.google.com/test/rich-results.
