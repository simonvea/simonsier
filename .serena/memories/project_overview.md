# Project Overview

**Name:** simonsier  
**Author:** Simon Opheim  
**Purpose:** Personal blog website written in Norwegian. Topics include climbing, fitness, and technical subjects.

## Tech Stack
- **Static Site Generator:** Eleventy (11ty) v3.x
- **Template Engine:** Nunjucks (njk), also supports Markdown, HTML, JSX
- **CSS Processing:** CleanCSS (minification)
- **JS Processing:** Terser (minification), esbuild (JSX compilation)
- **HTML:** html-minifier in production
- **Markdown:** markdown-it with plugins (anchor, TOC, modify-token)
- **Plugins:** eleventy-navigation, eleventy-plugin-rss, eleventy-plugin-syntaxhighlight, eleventy-plugin-webc
- **Language:** TypeScript (per Serena config), Norwegian content

## Directory Structure
- `src/` — source files (Eleventy input)
- `_site/` — generated output
- `src/_includes/` — reusable template components
- `src/_layouts/` — page layout templates
- `src/_data/` — global data files (e.g. site.json)
- `src/posts/` — blog posts in Markdown
- `src/styles/` — CSS files
- `src/images/` — static images
- `src/fonts/` — web fonts
- `.eleventy.js` — Eleventy configuration

## Key Config Files
- `package.json` — scripts and dependencies
- `.eleventy.js` — build config (plugins, filters, transforms)
- `src/_data/site.json` — global site data
- `src/posts/posts.json` — post metadata
