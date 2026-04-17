#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

DOMAIN="$(tr -d '\r\n' < CNAME)"
BASE_URL="https://${DOMAIN}"

to_canonical_path() {
  local file_path="$1"

  if [[ "$file_path" == "index.html" ]]; then
    printf "/\n"
    return
  fi

  if [[ "$file_path" == */index.html ]]; then
    printf "/%s/\n" "${file_path%/index.html}"
    return
  fi

  printf "/%s\n" "$file_path"
}

mapfile -t HTML_FILES < <(
  find . -type f -name "*.html" \
    | sed 's#^\./##' \
    | grep -v '^404\.html$' \
    | sort
)

{
  printf '%s\n' '<?xml version="1.0" encoding="UTF-8"?>'
  printf '%s\n' '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

  for file_path in "${HTML_FILES[@]}"; do
    canonical_path="$(to_canonical_path "$file_path")"
    printf '  <url>\n'
    printf '    <loc>%s%s</loc>\n' "$BASE_URL" "$canonical_path"
    printf '  </url>\n'
  done

  printf '%s\n' '</urlset>'
} > sitemap.xml
