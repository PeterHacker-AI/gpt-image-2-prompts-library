# Contributing

This repository is a curated static snapshot of the AIGPTIMAGE prompt library.

## What belongs here

- GPT Image 2 prompt examples with clear reusable prompt text
- A finished output image hosted on `cdn.aigptimage.com`
- Creator and source attribution when available
- Category metadata that maps to `aigptimage.com/image-prompts`

## Publishing workflow

1. Update `data/prompts.json` with structured prompt entries.
2. Update `data/asset-manifest.csv` when CDN assets change.
3. Run `npm run validate`.
4. Run `npm run generate`.
5. Review `README.md` before publishing.

## Content removal

If a creator or rights holder requests removal, remove the entry from
`data/prompts.json`, remove the corresponding manifest row, regenerate the
README, and publish the update.
