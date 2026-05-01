import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const dataPath = path.join(repoRoot, 'data', 'prompts.json');
const manifestPath = path.join(repoRoot, 'data', 'asset-manifest.csv');
const readmePath = path.join(repoRoot, 'README.md');

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

function fail(message) {
  console.error(message);
  process.exitCode = 1;
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

const prompts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const manifest = fs.readFileSync(manifestPath, 'utf8');
const readme = fs.readFileSync(readmePath, 'utf8');
const slugSet = new Set();

if (!Array.isArray(prompts) || prompts.length === 0) {
  fail('data/prompts.json must contain a non-empty array.');
}

for (const prompt of prompts) {
  if (!isNonEmptyString(prompt.slug)) fail('Every prompt needs a slug.');
  if (!isNonEmptyString(prompt.title)) fail(`Prompt ${prompt.slug || '<missing slug>'} needs a title.`);
  if (!isNonEmptyString(prompt.promptText)) fail(`Prompt ${prompt.slug} needs promptText.`);
  if (!Array.isArray(prompt.categorySlugs) || prompt.categorySlugs.length === 0) {
    fail(`Prompt ${prompt.slug} needs at least one category slug.`);
  }
  if (slugSet.has(prompt.slug)) fail(`Duplicate slug: ${prompt.slug}`);
  slugSet.add(prompt.slug);

  for (const image of prompt.images || []) {
    if (!image.url?.startsWith('https://cdn.aigptimage.com/')) {
      fail(`Prompt ${prompt.slug} has a non-CDN image URL: ${image.url || '<missing>'}`);
    }
  }
}

for (const slug of FEATURED_SLUGS) {
  const prompt = prompts.find((item) => item.slug === slug);
  if (!prompt) {
    fail(`Featured slug is missing from data: ${slug}`);
    continue;
  }
  if (!Array.isArray(prompt.images) || prompt.images.length === 0) {
    fail(`Featured prompt needs at least one image: ${slug}`);
  }
}

if (!manifest.includes('https://cdn.aigptimage.com/')) {
  fail('data/asset-manifest.csv does not contain expected CDN URLs.');
}

if (!readme.includes('https://aigptimage.com/image-prompts')) {
  fail('README is missing the prompt library link.');
}

if (!readme.includes('https://aigptimage.com/pricing')) {
  fail('README is missing the pricing link.');
}

if (!readme.includes('https://aigptimage.com/docs')) {
  fail('README is missing the API docs link.');
}

if (process.exitCode) {
  process.exit(process.exitCode);
}

console.log(`Validated ${prompts.length} prompt entries.`);
