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

## Personal details

Mikey Tabak's GitHub account and ORCID appear only in JSON-LD (the `Person` entry in `WildObserve/index.html`). Never put them in visible page text.

## Checking changes

- After editing JSON-LD, make sure each block still parses as JSON.
- After a change is live, test the page with Google's Rich Results Test: https://search.google.com/test/rich-results.
