import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const dataPath = path.join(repoRoot, 'data', 'prompts.json');

const SITE_URL = 'https://aigptimage.com';
const SNAPSHOT_DATE = '2026-05-02';

const LANGUAGES = [
  { code: 'en', name: 'English', file: 'README.md', prefix: '' },
  { code: 'zh', name: '简体中文', file: 'README_zh.md', prefix: '/zh' },
  { code: 'zh-TW', name: '繁體中文', file: 'README_zh-TW.md', prefix: '/tw' },
  { code: 'ja-JP', name: '日本語', file: 'README_ja-JP.md', prefix: '/ja' },
  { code: 'ko-KR', name: '한국어', file: 'README_ko-KR.md', prefix: '/ko' },
  { code: 'es-ES', name: 'Español', file: 'README_es-ES.md', prefix: '/es' },
  { code: 'de-DE', name: 'Deutsch', file: 'README_de-DE.md', prefix: '/de' },
  { code: 'fr-FR', name: 'Français', file: 'README_fr-FR.md', prefix: '/fr' },
  { code: 'pt-BR', name: 'Português', file: 'README_pt-BR.md', prefix: '/pt' },
];

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
  en: {
    'portrait-photography': 'Portrait & Photography',
    'ecommerce-product': 'E-commerce & Product',
    'ads-marketing': 'Ads & Marketing',
    'poster-typography': 'Poster & Typography',
    'ui-social-mockup': 'UI & Social Mockup',
    'infographics-education': 'Infographics & Education',
    'diagram-reference': 'Diagrams & Reference',
    'illustration-art': 'Illustration & Art',
    'character-design': 'Character Design',
    'game-entertainment': 'Game & Entertainment',
    'video-collage-storyboard': 'Video, Collage & Storyboard',
    'image-editing': 'Image Editing & Restoration',
    'architecture-interior': 'Architecture & Interior',
    'fashion-beauty': 'Fashion & Beauty',
    'food-drink': 'Food & Drink',
    'creative-experiments': 'Creative Experiments',
  },
  zh: {
    'portrait-photography': '人像与摄影',
    'ecommerce-product': '电商与产品',
    'ads-marketing': '广告与营销',
    'poster-typography': '海报与字体',
    'ui-social-mockup': 'UI 与社交媒体样机',
    'infographics-education': '信息图与教育',
    'diagram-reference': '图解与参考资料',
    'illustration-art': '插画与艺术',
    'character-design': '角色设计',
    'game-entertainment': '游戏与娱乐',
    'video-collage-storyboard': '视频、拼贴与分镜',
    'image-editing': '图片编辑与修复',
    'architecture-interior': '建筑与室内',
    'fashion-beauty': '时尚与美妆',
    'food-drink': '食物与饮品',
    'creative-experiments': '创意实验',
  },
  'zh-TW': {
    'portrait-photography': '人像與攝影',
    'ecommerce-product': '電商與產品',
    'ads-marketing': '廣告與行銷',
    'poster-typography': '海報與字體',
    'ui-social-mockup': 'UI 與社群媒體樣機',
    'infographics-education': '資訊圖與教育',
    'diagram-reference': '圖解與參考資料',
    'illustration-art': '插畫與藝術',
    'character-design': '角色設計',
    'game-entertainment': '遊戲與娛樂',
    'video-collage-storyboard': '影片、拼貼與分鏡',
    'image-editing': '圖片編輯與修復',
    'architecture-interior': '建築與室內',
    'fashion-beauty': '時尚與美妝',
    'food-drink': '食物與飲品',
    'creative-experiments': '創意實驗',
  },
};

const UI = {
  en: {
    title: 'Awesome GPT Image 2 Prompts',
    intro: 'Curated GPT Image 2 prompt examples prepared from the AIGPTIMAGE prompt library. This snapshot repository is designed for GitHub discovery, while the full browsing and generation workflow lives on [aigptimage.com]({siteUrl}).',
    why: 'Why this repo exists',
    whyItems: [
      'Show real GPT Image 2 prompt examples with finished visuals',
      'Give GitHub users a clean entry point into the AIGPTIMAGE prompt library',
      'Route creators to the web app, pricing, and API workflow instead of keeping usage trapped in a README',
    ],
    quickLinks: 'Quick Links',
    browse: 'Browse the full prompt library',
    openSite: 'Open GPT Image 2 on aigptimage.com',
    pricing: 'View pricing and subscriptions',
    docs: 'Read the API docs',
    apiKeys: 'Create an API key',
    signInRequired: 'sign-in required',
    stats: 'Snapshot Stats',
    metric: 'Metric',
    value: 'Value',
    promptEntries: 'Prompt entries',
    categoriesMetric: 'Categories',
    primaryModel: 'Primary model',
    imageHosting: 'Image hosting',
    snapshotDate: 'Snapshot date',
    howToUse: 'How to use this library',
    steps: [
      'Discover a prompt pattern on GitHub.',
      'Open the matching prompt page on [aigptimage.com]({libraryUrl}) to browse the full context.',
      'Use the prompt in the web app, or upgrade on [the pricing page]({pricingUrl}) if you need more credits or subscription access.',
      'If you are building programmatically, start from [the API docs]({docsUrl}) and then create keys at [API Keys]({apiKeysUrl}) after sign-in.',
    ],
    categories: 'Categories',
    category: 'Category',
    slug: 'Slug',
    entries: 'Entries',
    featured: 'Featured Examples',
    more: 'More Prompt Entries',
    moreIntro: 'The full library is better experienced on the site because it includes detail pages, browsing by category, prompt actions, and API/product conversion paths.',
    prompt: 'Prompt',
    primaryCategory: 'Primary category',
    summary: 'Summary',
    productPaths: 'Product Paths',
    rights: 'Rights and Attribution',
    rightsText: 'Prompt content is published under CC BY 4.0 with creator attribution when available. Code in this repository is MIT licensed. For attribution corrections or removal requests, open a content removal issue.',
    issues: 'Issues and Contributions',
    issuesText: 'Use GitHub Issues to submit new prompt candidates, report metadata problems, request attribution corrections, or ask for content removal. Maintainers review issue submissions before updating the static data snapshot.',
    dataFiles: 'Data Files',
    maintain: 'Maintain this repository',
    maintainText: 'The generator reads `data/prompts.json` and rewrites every README language file. Validation checks required fields, featured examples, CDN image URLs, multilingual README links, and the asset manifest.',
    creator: 'Creator',
    source: 'Source',
    sourcePost: 'Source post',
    openPrompt: 'Open prompt page',
    useOn: 'Use on AIGPTIMAGE',
    uncategorized: 'Uncategorized',
    unknown: 'Unknown',
  },
  zh: {
    title: 'GPT Image 2 提示词精选库',
    intro: '这是从 AIGPTIMAGE 提示词库整理出的 GPT Image 2 提示词示例仓库。GitHub 用于发现和索引，完整浏览、生成、订阅和 API 使用流程请前往 [aigptimage.com]({siteUrl})。',
    why: '这个仓库的用途',
    whyItems: ['展示带成品图的真实 GPT Image 2 提示词案例', '为 GitHub 用户提供进入 AIGPTIMAGE 提示词库的入口', '把用户引导到网页应用、订阅页和 API 使用流程'],
    quickLinks: '快速入口',
    browse: '浏览完整提示词库',
    openSite: '打开 aigptimage.com',
    pricing: '查看价格与订阅',
    docs: '阅读 API 文档',
    apiKeys: '创建 API Key',
    signInRequired: '需要登录',
    stats: '快照统计',
    metric: '指标',
    value: '数值',
    promptEntries: '提示词条目',
    categoriesMetric: '分类数量',
    primaryModel: '主要模型',
    imageHosting: '图片托管',
    snapshotDate: '快照日期',
    howToUse: '如何使用这个提示词库',
    steps: ['在 GitHub 上发现提示词模式。', '打开对应的 [aigptimage.com]({libraryUrl}) 提示词页面查看完整上下文。', '在网页应用里使用提示词；如果需要更多额度或订阅权益，前往 [价格页]({pricingUrl})。', '如果要程序化调用，先阅读 [API 文档]({docsUrl})，登录后在 [API Keys]({apiKeysUrl}) 创建密钥。'],
    categories: '分类',
    category: '分类',
    slug: 'Slug',
    entries: '条目数',
    featured: '精选示例',
    more: '更多提示词条目',
    moreIntro: '完整提示词库更适合在网站上浏览，因为网站包含详情页、分类浏览、提示词操作和 API/产品转化路径。',
    prompt: '提示词',
    primaryCategory: '主分类',
    summary: '摘要',
    productPaths: '产品路径',
    rights: '权益与归因',
    rightsText: '提示词内容按 CC BY 4.0 发布，并在可用时保留创作者归因。本仓库脚本代码按 MIT 授权。如需修正归因或移除内容，请提交内容移除 issue。',
    issues: 'Issues 与贡献',
    issuesText: '请通过 GitHub Issues 提交新提示词候选、反馈元数据问题、请求归因修正或内容移除。维护者审核 issue 后再更新静态数据快照。',
    dataFiles: '数据文件',
    maintain: '维护仓库',
    maintainText: '生成器读取 `data/prompts.json` 并重写所有语言版本 README。校验会检查必要字段、精选示例、CDN 图片、多语言 README 链接和资产清单。',
    creator: '创作者',
    source: '来源',
    sourcePost: '来源帖',
    openPrompt: '打开提示词页面',
    useOn: '在 AIGPTIMAGE 使用',
    uncategorized: '未分类',
    unknown: '未知',
  },
};

UI['zh-TW'] = {
  ...UI.zh,
  title: 'GPT Image 2 提示詞精選庫',
  intro: '這是從 AIGPTIMAGE 提示詞庫整理出的 GPT Image 2 提示詞示例倉庫。GitHub 用於發現和索引，完整瀏覽、生成、訂閱和 API 使用流程請前往 [aigptimage.com]({siteUrl})。',
  why: '這個倉庫的用途',
  browse: '瀏覽完整提示詞庫',
  pricing: '查看價格與訂閱',
  docs: '閱讀 API 文件',
  promptEntries: '提示詞條目',
  categoriesMetric: '分類數量',
  imageHosting: '圖片託管',
  snapshotDate: '快照日期',
  featured: '精選示例',
  more: '更多提示詞條目',
  rights: '權益與歸因',
  issues: 'Issues 與貢獻',
};

UI['ja-JP'] = {
  ...UI.en,
  title: 'Awesome GPT Image 2 Prompts 日本語版',
  intro: 'AIGPTIMAGE のプロンプトライブラリから整理した GPT Image 2 プロンプト例です。GitHub は発見用で、完全な閲覧、生成、サブスクリプション、API 利用は [aigptimage.com]({siteUrl}) で行います。',
  why: 'このリポジトリの目的',
  quickLinks: 'クイックリンク',
  browse: '完全なプロンプトライブラリを見る',
  pricing: '料金とサブスクリプションを見る',
  docs: 'API ドキュメントを読む',
  apiKeys: 'API キーを作成',
  signInRequired: 'ログインが必要',
  stats: 'スナップショット統計',
  howToUse: '使い方',
  categories: 'カテゴリ',
  featured: '注目例',
  more: 'その他のプロンプト',
  productPaths: '製品リンク',
  rights: '権利とクレジット',
  issues: 'Issue と貢献',
};

UI['ko-KR'] = {
  ...UI.en,
  title: 'Awesome GPT Image 2 Prompts 한국어판',
  intro: 'AIGPTIMAGE 프롬프트 라이브러리에서 정리한 GPT Image 2 프롬프트 예시입니다. GitHub는 발견을 위한 공간이며, 전체 탐색, 생성, 구독, API 사용은 [aigptimage.com]({siteUrl})에서 진행합니다.',
  why: '저장소 목적',
  quickLinks: '빠른 링크',
  browse: '전체 프롬프트 라이브러리 보기',
  pricing: '가격 및 구독 보기',
  docs: 'API 문서 읽기',
  apiKeys: 'API 키 만들기',
  signInRequired: '로그인 필요',
  stats: '스냅샷 통계',
  howToUse: '사용 방법',
  categories: '카테고리',
  featured: '추천 예시',
  more: '더 많은 프롬프트',
  productPaths: '제품 경로',
  rights: '권리 및 출처',
  issues: '이슈 및 기여',
};

UI['es-ES'] = {
  ...UI.en,
  title: 'Awesome GPT Image 2 Prompts en Español',
  intro: 'Ejemplos seleccionados de prompts de GPT Image 2 preparados desde la biblioteca de AIGPTIMAGE. GitHub sirve para descubrimiento; la navegación completa, generación, suscripción y API viven en [aigptimage.com]({siteUrl}).',
  why: 'Por qué existe este repositorio',
  quickLinks: 'Enlaces rápidos',
  browse: 'Explorar la biblioteca completa',
  pricing: 'Ver precios y suscripciones',
  docs: 'Leer documentación de API',
  apiKeys: 'Crear una clave API',
  signInRequired: 'requiere inicio de sesión',
  stats: 'Estadísticas',
  howToUse: 'Cómo usar esta biblioteca',
  categories: 'Categorías',
  featured: 'Ejemplos destacados',
  more: 'Más prompts',
  productPaths: 'Rutas del producto',
  rights: 'Derechos y atribución',
  issues: 'Issues y contribuciones',
};

UI['de-DE'] = {
  ...UI.en,
  title: 'Awesome GPT Image 2 Prompts auf Deutsch',
  intro: 'Kuratierte GPT Image 2 Prompt-Beispiele aus der AIGPTIMAGE Prompt-Bibliothek. GitHub dient der Auffindbarkeit; vollständiges Browsing, Generierung, Abos und API-Nutzung laufen über [aigptimage.com]({siteUrl}).',
  quickLinks: 'Schnelllinks',
  browse: 'Vollständige Prompt-Bibliothek ansehen',
  pricing: 'Preise und Abos ansehen',
  docs: 'API-Dokumentation lesen',
  apiKeys: 'API-Schlüssel erstellen',
  signInRequired: 'Anmeldung erforderlich',
  stats: 'Snapshot-Statistiken',
  categories: 'Kategorien',
  featured: 'Ausgewählte Beispiele',
  more: 'Weitere Prompts',
  productPaths: 'Produktpfade',
  rights: 'Rechte und Attribution',
  issues: 'Issues und Beiträge',
};

UI['fr-FR'] = {
  ...UI.en,
  title: 'Awesome GPT Image 2 Prompts en Français',
  intro: 'Exemples de prompts GPT Image 2 sélectionnés depuis la bibliothèque AIGPTIMAGE. GitHub sert à la découverte; la navigation complète, la génération, les abonnements et l’API se trouvent sur [aigptimage.com]({siteUrl}).',
  quickLinks: 'Liens rapides',
  browse: 'Explorer la bibliothèque complète',
  pricing: 'Voir les prix et abonnements',
  docs: 'Lire la documentation API',
  apiKeys: 'Créer une clé API',
  signInRequired: 'connexion requise',
  stats: 'Statistiques du snapshot',
  categories: 'Catégories',
  featured: 'Exemples sélectionnés',
  more: 'Autres prompts',
  productPaths: 'Chemins produit',
  rights: 'Droits et attribution',
  issues: 'Issues et contributions',
};

UI['pt-BR'] = {
  ...UI.en,
  title: 'Awesome GPT Image 2 Prompts em Português',
  intro: 'Exemplos selecionados de prompts GPT Image 2 preparados a partir da biblioteca AIGPTIMAGE. O GitHub serve para descoberta; navegação completa, geração, assinaturas e API ficam em [aigptimage.com]({siteUrl}).',
  quickLinks: 'Links rápidos',
  browse: 'Explorar biblioteca completa',
  pricing: 'Ver preços e assinaturas',
  docs: 'Ler documentação da API',
  apiKeys: 'Criar chave de API',
  signInRequired: 'login obrigatório',
  stats: 'Estatísticas do snapshot',
  categories: 'Categorias',
  featured: 'Exemplos em destaque',
  more: 'Mais prompts',
  productPaths: 'Caminhos do produto',
  rights: 'Direitos e atribuição',
  issues: 'Issues e contribuições',
};

function t(locale, key) {
  return UI[locale]?.[key] ?? UI.en[key] ?? key;
}

function replaceParams(text, params) {
  return String(text).replace(/\{(\w+)\}/g, (_, key) => params[key] ?? `{${key}}`);
}

function getLocaleConfig(locale) {
  return LANGUAGES.find((lang) => lang.code === locale) || LANGUAGES[0];
}

function buildUrl(locale, pathName = '') {
  const lang = getLocaleConfig(locale);
  return `${SITE_URL}${lang.prefix}${pathName}`;
}

function libraryUrl(locale) {
  return buildUrl(locale, '/image-prompts');
}

function pricingUrl(locale) {
  return buildUrl(locale, '/pricing');
}

function docsUrl(locale) {
  return buildUrl(locale, '/docs');
}

function apiKeysUrl(locale) {
  return buildUrl(locale, '/settings/apikeys');
}

function promptLink(locale, slug) {
  return `${libraryUrl(locale)}/p/${slug}`;
}

function categoryLink(locale, slug) {
  return `${libraryUrl(locale)}/${slug}`;
}

function titleCaseSlug(slug) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function toCategoryLabel(slug, locale) {
  const labels = CATEGORY_LABELS[locale] || CATEGORY_LABELS.en;
  return labels[slug] || CATEGORY_LABELS.en[slug] || titleCaseSlug(slug);
}

function escapePipe(text) {
  return String(text).replace(/\|/g, '\\|');
}

function truncate(text, length) {
  const value = String(text || '').replace(/\s+/g, ' ').trim();
  if (value.length <= length) return value;
  return `${value.slice(0, Math.max(0, length - 1)).trimEnd()}…`;
}

function localizedPromptText(prompt, key, locale) {
  const entry = prompt.i18n?.find((item) => item.locale === locale);
  return entry?.[key] || prompt[key] || prompt.i18n?.[0]?.[key] || '';
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

function buildLanguageNavigation(currentLocale) {
  return LANGUAGES.map((lang) => {
    const message = lang.code === currentLocale ? 'Current' : 'View';
    const color = lang.code === currentLocale ? 'brightgreen' : 'lightgrey';
    return `[![${lang.name}](https://img.shields.io/badge/${encodeURIComponent(lang.name)}-${message}-${color})](${lang.file})`;
  }).join(' ');
}

function buildCategoryTable(prompts, locale) {
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
        `| [${escapePipe(toCategoryLabel(slug, locale))}](${categoryLink(locale, slug)}) | \`${slug}\` | ${count} |`
    )
    .join('\n');
}

function buildFeaturedSection(prompts, locale) {
  return prompts
    .map((prompt, index) => {
      const image = prompt.images?.[0];
      const title = localizedPromptText(prompt, 'title', locale) || prompt.title;
      const description = localizedPromptText(prompt, 'description', locale) || prompt.description;
      const categories = (prompt.categorySlugs || [])
        .map((slug) => `[${toCategoryLabel(slug, locale)}](${categoryLink(locale, slug)})`)
        .join(', ');
      const creator = prompt.creatorUrl
        ? `[${prompt.creatorName || prompt.creatorHandle || t(locale, 'unknown')}](${prompt.creatorUrl})`
        : prompt.creatorName || prompt.creatorHandle || t(locale, 'unknown');
      const source = prompt.sourceUrl
        ? `[${t(locale, 'sourcePost')}](${prompt.sourceUrl})`
        : t(locale, 'unknown');
      const promptBody = truncate(prompt.promptText, 420);

      return `## ${index + 1}. ${title}

${image?.url ? `![${title}](${image.url})\n` : ''}

${description}

- ${t(locale, 'categories')}: ${categories || t(locale, 'uncategorized')}
- ${t(locale, 'creator')}: ${creator}
- ${t(locale, 'source')}: ${source}
- ${t(locale, 'useOn')}: [${t(locale, 'openPrompt')}](${promptLink(locale, prompt.slug)})

\`\`\`
${promptBody}
\`\`\`
`;
    })
    .join('\n');
}

function buildRecentTable(prompts, locale) {
  const bucketOrder = [
    'ecommerce-product',
    'ads-marketing',
    'portrait-photography',
    'poster-typography',
    'ui-social-mockup',
    'infographics-education',
    'diagram-reference',
    'illustration-art',
    'character-design',
    'game-entertainment',
    'video-collage-storyboard',
    'image-editing',
    'architecture-interior',
    'fashion-beauty',
    'food-drink',
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
      const title = localizedPromptText(prompt, 'title', locale) || prompt.title;
      const summary = truncate(localizedPromptText(prompt, 'summary', locale) || prompt.summary || prompt.description || '', 80);
      return `| [${escapePipe(title)}](${promptLink(locale, prompt.slug)}) | ${escapePipe(
        toCategoryLabel(prompt.primaryCategorySlug || prompt.categorySlugs?.[0] || 'general', locale)
      )} | ${escapePipe(summary)} |`;
    })
    .join('\n');
}

function buildReadme(prompts, locale) {
  const featured = pickFeatured(prompts);
  const siteUrl = buildUrl(locale);
  const localLibraryUrl = libraryUrl(locale);
  const localPricingUrl = pricingUrl(locale);
  const localDocsUrl = docsUrl(locale);
  const localApiKeysUrl = apiKeysUrl(locale);

  return `# ${t(locale, 'title')}

${replaceParams(t(locale, 'intro'), { siteUrl })}

[![Validate repository](https://github.com/GeekGallifrey/GPT-Image-2-Prompts/actions/workflows/validate.yml/badge.svg)](https://github.com/GeekGallifrey/GPT-Image-2-Prompts/actions/workflows/validate.yml)
[![License: CC BY 4.0](https://img.shields.io/badge/Prompt%20Content-CC%20BY%204.0-lightgrey.svg)](LICENSE)
[![Website](https://img.shields.io/badge/Try%20prompts-aigptimage.com-111111.svg)](${localLibraryUrl})

${buildLanguageNavigation(locale)}

## ${t(locale, 'why')}

${t(locale, 'whyItems').map((item) => `- ${item}`).join('\n')}

## ${t(locale, 'quickLinks')}

- [${t(locale, 'browse')}](${localLibraryUrl})
- [${t(locale, 'openSite')}](${siteUrl})
- [${t(locale, 'pricing')}](${localPricingUrl})
- [${t(locale, 'docs')}](${localDocsUrl})
- [${t(locale, 'apiKeys')}](${localApiKeysUrl}) (${t(locale, 'signInRequired')})

## ${t(locale, 'stats')}

| ${t(locale, 'metric')} | ${t(locale, 'value')} |
| --- | ---: |
| ${t(locale, 'promptEntries')} | ${prompts.length} |
| ${t(locale, 'categoriesMetric')} | ${new Set(prompts.flatMap((prompt) => prompt.categorySlugs || [])).size} |
| ${t(locale, 'primaryModel')} | GPT Image 2 |
| ${t(locale, 'imageHosting')} | \`cdn.aigptimage.com\` |
| ${t(locale, 'snapshotDate')} | ${SNAPSHOT_DATE} |

## ${t(locale, 'howToUse')}

${t(locale, 'steps').map((step, index) => `${index + 1}. ${replaceParams(step, {
    libraryUrl: localLibraryUrl,
    pricingUrl: localPricingUrl,
    docsUrl: localDocsUrl,
    apiKeysUrl: localApiKeysUrl,
  })}`).join('\n')}

## ${t(locale, 'categories')}

| ${t(locale, 'category')} | ${t(locale, 'slug')} | ${t(locale, 'entries')} |
| --- | --- | ---: |
${buildCategoryTable(prompts, locale)}

## ${t(locale, 'featured')}

${buildFeaturedSection(featured, locale)}

## ${t(locale, 'more')}

${t(locale, 'moreIntro')}

| ${t(locale, 'prompt')} | ${t(locale, 'primaryCategory')} | ${t(locale, 'summary')} |
| --- | --- | --- |
${buildRecentTable(prompts, locale)}

## ${t(locale, 'productPaths')}

- ${t(locale, 'browse')}: [aigptimage.com/image-prompts](${localLibraryUrl})
- ${t(locale, 'openPrompt')}: \`${localLibraryUrl}/p/<slug>\`
- ${t(locale, 'categories')}: \`${localLibraryUrl}/<category-slug>\`
- ${t(locale, 'pricing')}: [aigptimage.com/pricing](${localPricingUrl})
- ${t(locale, 'docs')}: [aigptimage.com/docs](${localDocsUrl})
- ${t(locale, 'apiKeys')}: [aigptimage.com/settings/apikeys](${localApiKeysUrl})

## ${t(locale, 'rights')}

${t(locale, 'rightsText')}

## ${t(locale, 'issues')}

${t(locale, 'issuesText')}

## ${t(locale, 'dataFiles')}

- [data/prompts.json](data/prompts.json): structured prompt snapshot used for this repository
- [data/asset-manifest.csv](data/asset-manifest.csv): CDN asset manifest for published images
- [NOTICE.md](NOTICE.md): publishing and attribution notice
- [docs/FEATURED_STRATEGY.md](docs/FEATURED_STRATEGY.md): how examples are selected for the README
- [docs/GITHUB_REPO_COPY.md](docs/GITHUB_REPO_COPY.md): suggested GitHub repository description, topics, and social copy

## ${t(locale, 'maintain')}

\`\`\`bash
npm run validate
npm run generate
\`\`\`

${t(locale, 'maintainText')}
`;
}

const prompts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

for (const language of LANGUAGES) {
  const readme = buildReadme(prompts, language.code);
  const outputPath = path.join(repoRoot, language.file);
  fs.writeFileSync(outputPath, readme);
  console.log(`Generated ${language.file}`);
}
