#!/bin/bash
# Converts and resizes photos from ./photos into web-friendly .webp files
# in ./images. Never touches or deletes anything in ./photos — originals
# are always left alone.
#
# Requires the "cwebp" command-line tool (part of Google's libwebp).
# This machine doesn't have it installed yet. To install it via
# Homebrew, run this yourself (this script will not install anything
# for you):
#
#   brew install webp
#
# Usage:
#   ./scripts/compress-images.sh
#
# After it runs, it prints the pixel width/height of each generated
# .webp file — copy those numbers into the width/height attributes of
# the <img> tag you add to index.html (see the HOW TO ADD REAL PHOTOS
# comment in the gallery section of index.html).

set -euo pipefail

SRC_DIR="photos"
DEST_DIR="images"
MAX_WIDTH=1600   # resize anything wider than this; keeps file sizes small
QUALITY=75       # 0-100, 75 is a good balance of size vs. quality

if ! command -v cwebp >/dev/null 2>&1; then
  echo "Error: cwebp is not installed."
  echo "Install it with:  brew install webp"
  echo "Then run this script again."
  exit 1
fi

mkdir -p "$DEST_DIR"

shopt -s nullglob nocaseglob
found_any=false

for src_path in "$SRC_DIR"/*.jpg "$SRC_DIR"/*.jpeg "$SRC_DIR"/*.png "$SRC_DIR"/*.heic "$SRC_DIR"/*.tiff "$SRC_DIR"/*.bmp; do
  found_any=true
  filename=$(basename "$src_path")
  name="${filename%.*}"
  ext="${filename##*.}"
  out_path="$DEST_DIR/$name.webp"

  # cwebp can't read HEIC directly (common format for iPhone photos), so
  # convert HEIC to a temporary JPEG first using macOS's built-in "sips"
  # tool, then hand that JPEG to cwebp.
  if [[ "${ext,,}" == "heic" ]]; then
    tmp_jpg=$(mktemp -t "${name}.XXXXXX").jpg
    sips -s format jpeg "$src_path" --out "$tmp_jpg" >/dev/null
    cwebp -quiet -q "$QUALITY" -resize "$MAX_WIDTH" 0 "$tmp_jpg" -o "$out_path"
    rm -f "$tmp_jpg"
  else
    cwebp -quiet -q "$QUALITY" -resize "$MAX_WIDTH" 0 "$src_path" -o "$out_path"
  fi

  dimensions=$(sips -g pixelWidth -g pixelHeight "$out_path" | awk '/pixelWidth|pixelHeight/ {print $2}' | paste -sd 'x' -)
  echo "Converted: $src_path -> $out_path  (${dimensions})"
done

if [ "$found_any" = false ]; then
  echo "No photos found in ./$SRC_DIR. Add some image files there first."
fi
