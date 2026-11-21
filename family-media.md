# Host Family Photos & Videos on Cloudflare R2

## Current State & Constraints

- `yonisimian.com` is hosted via Netlify (free tier) via GitHub; domain managed via Hostinger (DNS now active on Cloudflare).
- I want to add many GBs of family photos and videos to my site, keeping this media out of Git and without using Git LFS.
- Privacy is not a priority right now (public URLs on custom domain are fine; see Decisions).

## Infrastructure Ready (Set Up in Cloudflare)

- R2 Bucket Name: `family-media`
- Public Custom Domain: `https://family-media.yonisimian.com`
- S3 API Endpoint: `https://1ade1915ced28451696e416dc8ed1776.r2.cloudflarestorage.com`

## Desired Architecture & UX

1. **Albums + Lazy Masonry + On-Demand Downloads:**
   - Group media into albums (e.g., by event/trip/year) with an optional "All / Latest" view.
   - Render a responsive masonry grid using compressed thumbnails/posters and `loading="lazy"` (plus precomputed dimensions in a manifest to prevent layout shift).
   - Open full-resolution photos or stream videos only inside a lightbox when clicked.
   - Provide per-item original download and per-album download (prefer pre-built album `.zip` files over client-side or serverless on-the-fly zipping).
2. **Build / Sync Pipeline:**
   - Add a repeatable script/workflow (local or CI) that takes source media outside the repo, generates thumbnails/video posters (and web-friendly video if needed), builds per-album `manifest.json` files (and optional `.zip` archives), and syncs assets to R2 via S3-compatible tooling (`rclone`, AWS CLI, or SDK).
   - Remove the old in-repo photo bloat once migrated.

## Tasks

1. Design the album data schema (`manifest.json` per album) and gallery UI (albums view, lazy-loaded masonry grid, lightbox, individual & album download actions).
2. Create an automated media-processing and R2 upload/sync script (with `.env.example` / secret handling and `.gitignore` rules so local media/secrets never enter Git).
3. Update site config/env references to point media URLs to `https://family-media.yonisimian.com` and document the workflow for adding future albums.

## Decisions (2026-11-20)

### Privacy

- **No auth.** Anyone with a link may view; `albums.json` is public. Cloudflare Access can be added on the subdomain later without URL changes.
- **Strip all location/GPS metadata** from every served file, including downloadable originals. Add a coarse `place` field. Untouched originals stay local as the archive.
- **Keep out of search engines:** `X-Robots-Tag: noindex` on the media subdomain (Cloudflare Transform Rule), `noindex` meta on gallery routes, and exclude them from the sitemap.

### Data

- Root `albums.json` index (id, title, date, cover, count) + per-album `manifest.json`.
- Manifest item fields: `id`, `type`, `takenAt`, `width`/`height` (post-EXIF-rotation), per-variant URL + bytes, optional `blurhash`/dominant colour, optional `caption`. Manifest carries `version` + `generatedAt`.
- Three image variants: `thumb` (~400px, WebP/AVIF), `display` (~2048px long edge, lightbox), `original` (download only).
- Videos: H.264/AAC MP4 ~1080p with `+faststart` for streaming, ffmpeg-generated poster, original kept for download. Convert HEIC input.
- Content-hashed filenames with `Cache-Control: immutable`; manifests short TTL (~5 min).
- Album `.zip`: store-only (`zip -0`), rebuilt only when album content hash changes, optional per album.

### Delivery

- Originals and zips uploaded with `Content-Disposition: attachment` (cross-origin `download` attribute is ignored).
- R2 CORS policy allowing GET from `yonisimian.com`.
- Single `VITE_MEDIA_BASE_URL` env var + `mediaUrl()` helper; no hardcoded `/media/...` paths.
- Netlify `[images] remote_images` entry if remote media goes through `/cdnimg/`.

### Pipeline & secrets

- Python (reuse existing Pillow tooling in `src/functions/static/`).
- `rclone copy` by default with `--dry-run`; prune/delete only behind an explicit flag. R2 is not a backup.
- R2 API token scoped to the `family-media` bucket, Object Read & Write only. Secrets live outside the repo; `.env` git-ignored, `.env.example` committed.

### UI

- **Lightbox:** grow the existing `YCarousel` (PhotoSwipe rejected).
- **Grid:** justified rows (Google Photos / Flickr style). Row-major left-to-right order, no cropping, rows scaled to fill the width using manifest aspect ratios, so there is no layout shift. Not true column masonry.
- i18n strings and dark-theme support like the rest of the site.

## Phases (one PR each)

- **A. Cleanup:** merge `TripView`/`IcelandTripView` and their data configs; replace hand-rolled `useAOS`/`useSizeObserver` with VueUse; make `YCarousel` generic (no `any[]`); add `mediaUrl()` + `VITE_MEDIA_BASE_URL`; resolve stale TODOs.
- **B. Shared media primitives:** media item (image/video, variants, lazy, aspect-ratio placeholder), justified-rows grid, `YCarousel` lightbox mode; rebuild `TripMasonry` on them (+ skeleton).
- **C. Family media pipeline:** processing + R2 sync script, manifests, `.env` handling.
- **D. Family gallery UI:** albums view, grid, lightbox, item/album downloads.
- **E. Trip media → R2, then history purge:** migrate `public/media/trips/`, update references, then `git filter-repo` + force-push (approved).
