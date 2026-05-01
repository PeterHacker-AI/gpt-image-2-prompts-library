import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const dataPath = path.join(repoRoot, 'data', 'prompts.json');
const outputPath = path.join(repoRoot, 'README.md');

const SITE_URL = 'https://aigptimage.com';
const LIBRARY_URL = `${SITE_URL}/image-prompts`;
const PRICING_URL = `${SITE_URL}/pricing`;
const DOCS_URL = `${SITE_URL}/docs`;
const API_KEYS_URL = `${SITE_URL}/settings/apikeys`;
const SNAPSHOT_DATE = '2026-05-02';

const FEATURED_SLUGS = [
  'e-commerce-main-image-luxury-amber-perfume-ad',
  'chengdu-food-map-illustration',
  'science-encyclopedia-infographic',
  'luxury-glam-beauty-portrait',
  'anime-character-brand-identity-merch-board',
  'dark-mode-marketing-case-study-ui',
  'style-to-ui-design-system',
  'museum-style-hanfu-breakdown-infographic',
  'tropical-parrot-pixel-mosaic',
  'persona5-character-reference-card',
];

const CATEGORY_LABELS = {
  ecommerce: 'E-commerce',
  'product-advertising': 'Product Advertising',
  'ad-creative': 'Ad Creative',
  illustration: 'Illustration',
  'portrait-avatar': 'Portrait / Avatar',
  infographics: 'Infographics',
  'character-design': 'Character Design',
  'ui-social-mockup': 'UI / Social Mockup',
  'creative-experiments': 'Creative Experiments',
  comparison: 'Comparison',
};

function titleCaseSlug(slug) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function toCategoryLabel(slug) {
  return CATEGORY_LABELS[slug] || titleCaseSlug(slug);
}

function escapePipe(text) {
  return String(text).replace(/\|/g, '\\|');
}

function truncate(text, length) {
  const value = String(text || '').replace(/\s+/g, ' ').trim();
  if (value.length <= length) return value;
  return `${value.slice(0, Math.max(0, length - 1)).trimEnd()}…`;
}

function promptLink(slug) {
  return `${LIBRARY_URL}/p/${slug}`;
}

function categoryLink(slug) {
  return `${LIBRARY_URL}/${slug}`;
}

function pickFeatured(prompts) {
  const map = new Map(prompts.map((prompt) => [prompt.slug, prompt]));
  const selected = [];

  for (const slug of FEATURED_SLUGS) {
    const prompt = map.get(slug);
    if (prompt) selected.push(prompt);
  }

  if (selected.length >= 8) return selected;

  for (const prompt of prompts) {
    if (selected.length >= 10) break;
    if (!selected.some((item) => item.slug === prompt.slug)) {
      selected.push(prompt);
    }
  }

  return selected;
}

function buildCategoryTable(prompts) {
  const counts = new Map();

  for (const prompt of prompts) {
    for (const slug of prompt.categorySlugs || []) {
      counts.set(slug, (counts.get(slug) || 0) + 1);
    }
  }

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(
      ([slug, count]) =>
        `| [${escapePipe(toCategoryLabel(slug))}](${categoryLink(slug)}) | \`${slug}\` | ${count} |`
    )
    .join('\n');
}

function buildFeaturedSection(prompts) {
  return prompts
    .map((prompt, index) => {
      const image = prompt.images?.[0];
      const categories = (prompt.categorySlugs || [])
        .map((slug) => `[${toCategoryLabel(slug)}](${categoryLink(slug)})`)
        .join(', ');
      const creator = prompt.creatorUrl
        ? `[${prompt.creatorName || prompt.creatorHandle || 'Original creator'}](${prompt.creatorUrl})`
        : prompt.creatorName || prompt.creatorHandle || 'Unknown';
      const source = prompt.sourceUrl
        ? `[Source post](${prompt.sourceUrl})`
        : 'Source unavailable';
      const promptBody = truncate(prompt.promptText, 420);

      return `## ${index + 1}. ${prompt.title}

${image?.url ? `![${prompt.title}](${image.url})\n` : ''}

${prompt.description}

- Categories: ${categories || 'Uncategorized'}
- Creator: ${creator}
- Source: ${source}
- Use on AIGPTIMAGE: [Open prompt page](${promptLink(prompt.slug)})

\`\`\`
${promptBody}
\`\`\`
`;
    })
    .join('\n');
}

function buildRecentTable(prompts) {
  const bucketOrder = [
    'ecommerce',
    'ad-creative',
    'portrait-avatar',
    'illustration',
    'character-design',
    'ui-social-mockup',
    'creative-experiments',
  ];
  const perBucket = new Map();

  for (const prompt of prompts) {
    const key = prompt.primaryCategorySlug || prompt.categorySlugs?.[0] || 'general';
    if (!perBucket.has(key)) perBucket.set(key, []);
    perBucket.get(key).push(prompt);
  }

  const selected = [];
  for (const bucket of bucketOrder) {
    const items = perBucket.get(bucket) || [];
    for (const item of items.slice(0, 4)) {
      selected.push(item);
      if (selected.length >= 24) break;
    }
    if (selected.length >= 24) break;
  }

  if (selected.length < 24) {
    for (const prompt of prompts) {
      if (selected.length >= 24) break;
      if (!selected.some((item) => item.slug === prompt.slug)) {
        selected.push(prompt);
      }
    }
  }

  return selected
    .map((prompt) => {
      const summary = truncate(prompt.summary || prompt.description || '', 80);
      return `| [${escapePipe(prompt.title)}](${promptLink(prompt.slug)}) | ${escapePipe(
        toCategoryLabel(prompt.primaryCategorySlug || prompt.categorySlugs?.[0] || 'general')
      )} | ${escapePipe(summary)} |`;
    })
    .join('\n');
}

function buildReadme(prompts) {
  const featured = pickFeatured(prompts);
  return `# Awesome GPT Image 2 Prompts

Curated GPT Image 2 prompt examples prepared from the AIGPTIMAGE prompt library. This snapshot repository is designed for GitHub discovery, while the full browsing and generation workflow lives on [aigptimage.com](${SITE_URL}).

[![Validate repository](https://github.com/aigptimage/awesome-gpt-image-2-prompts/actions/workflows/validate.yml/badge.svg)](https://github.com/aigptimage/awesome-gpt-image-2-prompts/actions/workflows/validate.yml)
[![License: CC BY 4.0](https://img.shields.io/badge/Prompt%20Content-CC%20BY%204.0-lightgrey.svg)](LICENSE)
[![Website](https://img.shields.io/badge/Try%20prompts-aigptimage.com-111111.svg)](${LIBRARY_URL})

## Why this repo exists

- Show real GPT Image 2 prompt examples with finished visuals
- Give GitHub users a clean entry point into the AIGPTIMAGE prompt library
- Route creators to the web app, pricing, and API workflow instead of keeping usage trapped in a README

## Quick Links

- [Browse the full prompt library](${LIBRARY_URL})
- [Open GPT Image 2 on aigptimage.com](${SITE_URL})
- [View pricing and subscriptions](${PRICING_URL})
- [Read the API docs](${DOCS_URL})
- [Create an API key](${API_KEYS_URL}) (sign-in required)

## Snapshot Stats

| Metric | Value |
| --- | ---: |
| Prompt entries | ${prompts.length} |
| Categories | ${new Set(prompts.flatMap((prompt) => prompt.categorySlugs || [])).size} |
| Primary model | GPT Image 2 |
| Image hosting | \`cdn.aigptimage.com\` |
| Snapshot date | ${SNAPSHOT_DATE} |

## How to use this library

1. Discover a prompt pattern on GitHub.
2. Open the matching prompt page on [aigptimage.com](${LIBRARY_URL}) to browse the full context.
3. Use the prompt in the web app, or upgrade on [the pricing page](${PRICING_URL}) if you need more credits or subscription access.
4. If you are building programmatically, start from [the API docs](${DOCS_URL}) and then create keys at [API Keys](${API_KEYS_URL}) after sign-in.

## Categories

| Category | Slug | Entries |
| --- | --- | ---: |
${buildCategoryTable(prompts)}

## Featured Examples

${buildFeaturedSection(featured)}

## More Prompt Entries

The full library is better experienced on the site because it includes detail pages, browsing by category, prompt actions, and API/product conversion paths.

| Prompt | Primary category | Summary |
| --- | --- | --- |
${buildRecentTable(prompts)}

## Product Paths

- Prompt library: [aigptimage.com/image-prompts](${LIBRARY_URL})
- Prompt detail pages: \`${LIBRARY_URL}/p/<slug>\`
- Category pages: \`${LIBRARY_URL}/<category-slug>\`
- Pricing and subscriptions: [aigptimage.com/pricing](${PRICING_URL})
- API docs: [aigptimage.com/docs](${DOCS_URL})
- API keys: [aigptimage.com/settings/apikeys](${API_KEYS_URL})

## Rights and Attribution

Prompt content is published under CC BY 4.0 with creator attribution when available. Code in this repository is MIT licensed. For attribution corrections or removal requests, open a content removal issue.

## Data Files

- [data/prompts.json](data/prompts.json): structured prompt snapshot used for this repository
- [data/asset-manifest.csv](data/asset-manifest.csv): CDN asset manifest for published images
- [NOTICE.md](NOTICE.md): publishing and attribution notice
- [docs/FEATURED_STRATEGY.md](docs/FEATURED_STRATEGY.md): how examples are selected for the README
- [docs/GITHUB_REPO_COPY.md](docs/GITHUB_REPO_COPY.md): suggested GitHub repository description, topics, and social copy

## Maintain this repository

\`\`\`bash
npm run validate
npm run generate
\`\`\`

The generator reads \`data/prompts.json\` and rewrites this README. Validation checks required fields, featured examples, CDN image URLs, and the asset manifest.
`;
}

const prompts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const readme = buildReadme(prompts);
fs.writeFileSync(outputPath, readme);
console.log(`README generated at ${outputPath}`);
