# Featured Example Strategy

The README should show enough variety to make the repository useful at a
glance while still sending users to the full prompt library on AIGPTIMAGE.

## Selection rules

- Feature 8 to 10 examples.
- Put five beauty/female portrait examples first, with `luxury-glam-beauty-portrait`
  as the first card for stronger visual impact in the README hero scroll.
- After the first five portrait examples, cover multiple high-intent categories:
  e-commerce, ad creative, infographics, UI mockups, and character design.
- Prefer examples with strong CDN images, clear prompt text, and source
  attribution.
- Include prompts with dynamic `{argument ...}` placeholders when possible,
  because they demonstrate reusable prompt patterns.
- Keep the list capped at 10 examples so the README stays lightweight and sends
  users to the full prompt library on AIGPTIMAGE.

## Current featured slugs

- `luxury-glam-beauty-portrait`
- `dreamy-backlit-editorial-portrait`
- `soft-airy-35mm-portrait`
- `35mm-flash-editorial-portrait`
- `japanese-onsen-ryokan-portrait`
- `e-commerce-main-image-luxury-amber-perfume-ad`
- `chengdu-food-map-illustration`
- `science-encyclopedia-infographic`
- `anime-character-brand-identity-merch-board`
- `style-to-ui-design-system`

The canonical list lives in `scripts/generate-readme.mjs`. Update that list
and run `npm run validate && npm run generate` after changing featured entries.
