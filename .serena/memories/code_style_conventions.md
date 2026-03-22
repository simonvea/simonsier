# Code Style and Conventions

## Templates
- Nunjucks (`.njk`) is the primary template language
- Layouts in `src/_layouts/`, partials/components in `src/_includes/`

## Content
- Blog posts are Markdown files in `src/posts/`
- All content is in Norwegian (`nb-NO` locale)
- Norwegian date formatting used throughout

## JavaScript / Config
- Eleventy config in `.eleventy.js` (CommonJS style)
- JSX files compiled with esbuild (for CMS customization, currently unused)
- No TypeScript compilation step — TS listed as language but config is plain JS

## CSS
- Plain CSS in `src/styles/`
- Minified in production via CleanCSS

## Links
- External links automatically get `target="_blank"` and `rel="noopener"` via markdown-it plugin

## No formal linting or formatting enforced
