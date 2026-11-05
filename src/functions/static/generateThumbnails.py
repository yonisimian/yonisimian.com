"""Generates `N.small.webp` next to every trip `N.jpg` / `N-thumb.jpg`, for the carousel's thumbnail strip."""

import os
import sys
from PIL import Image, ImageOps

MEDIA_DIR = os.path.join("public", "media", "trip")
MAX_SIZE = (320, 320)
QUALITY = 70


def generate_thumbnails(media_dir: str, force: bool = False) -> None:
    created = skipped = 0
    for root, _, files in os.walk(media_dir):
        for filename in files:
            if not filename.endswith(".jpg"):
                continue
            target = os.path.join(root, filename[: -len(".jpg")] + ".small.webp")
            if os.path.exists(target) and not force:
                skipped += 1
                continue
            with Image.open(os.path.join(root, filename)) as img:
                img = ImageOps.exif_transpose(img)
                img.thumbnail(MAX_SIZE)
                img.save(target, "webp", quality=QUALITY, method=6)
            created += 1
    print(f"Created {created} thumbnails, skipped {skipped} existing.")


if __name__ == "__main__":
    generate_thumbnails(MEDIA_DIR, force="--force" in sys.argv)
