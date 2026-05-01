# Featured Example Strategy

The README should show enough variety to make the repository useful at a
glance while still sending users to the full prompt library on AIGPTIMAGE.

## Selection rules

- Feature 8 to 10 examples.
- Cover multiple high-intent categories: e-commerce, ad creative, infographics,
  portrait/avatar, UI mockups, character design, and creative experiments.
- Prefer examples with strong CDN images, clear prompt text, and source
  attribution.
- Include prompts with dynamic `{argument ...}` placeholders when possible,
  because they demonstrate reusable prompt patterns.
- Avoid filling the first screen with one category, even if that category has
  many entries.

## Current featured slugs

- `e-commerce-main-image-luxury-amber-perfume-ad`
- `chengdu-food-map-illustration`
- `science-encyclopedia-infographic`
- `luxury-glam-beauty-portrait`
- `anime-character-brand-identity-merch-board`
- `dark-mode-marketing-case-study-ui`
- `style-to-ui-design-system`
- `museum-style-hanfu-breakdown-infographic`
- `tropical-parrot-pixel-mosaic`
- `persona5-character-reference-card`

The canonical list lives in `scripts/generate-readme.mjs`. Update that list
and run `npm run validate && npm run generate` after changing featured entries.
