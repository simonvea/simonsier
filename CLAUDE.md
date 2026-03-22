# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog website built with Eleventy (11ty) static site generator. The site is written in Norwegian and contains blog posts about climbing, fitness, and technical topics.

## Key Commands

### Development
- `npm run serve` - Start development server with hot reload
- `npm run build` - Build site to `_site/`
- `npm run build:prod` - Build for production (sets ELEVENTY_PRODUCTION=true, enables HTML minification)
- `npm run debug` - Run with debug output enabled
- `npm run cms` - Start Decap CMS server (currently not in use)

### Deployment
The site is deployed via GitHub Actions (`.github/workflows/deploy.yml`) on push to `main`. The build process:
1. Runs `npm ci && npm run build`
2. Rsyncs `_site/` to a VPS over SSH using `secrets.VPS_SSH_KEY`, `secrets.VPS_USER`, `secrets.VPS_HOST`

## Architecture

### Directory Structure
- `src/` - Source files (input directory)
- `_site/` - Generated output directory
- `src/_includes/` - Reusable template components
- `src/_layouts/` - Page layout templates
- `src/_data/` - Global data files
- `src/posts/` - Blog post content in Markdown
- `src/styles/` - CSS files
- `src/images/` - Static images
- `src/fonts/` - Web fonts

### Template Engine
- Primary: Nunjucks (njk)
- Markdown files are processed through Nunjucks
- Supports HTML, Markdown, and JSX files
- JSX files are compiled with esbuild for CMS customization

### Content Management
- Blog posts are in Markdown format in `src/posts/`
- Post metadata is in `posts.json`
- Global site data in `src/_data/site.json`
- Uses Norwegian date formatting (`nb-NO`)

### Build Process
- CSS minification via CleanCSS
- JavaScript minification via Terser
- HTML minification in production
- JSX compilation with esbuild
- Syntax highlighting for code blocks
- RSS feed generation
- Automatic table of contents generation
- External links open in new tabs with `rel="noopener"`

### Key Features
- Navigation plugin for site navigation
- Syntax highlighting for code blocks
- RSS feed support (plugin v3, loaded via async `import()` in `.eleventy.js`)
- Responsive design with dark theme
- Font optimization (Lora font family)
- HTML minification via `html-minifier-terser` (production only)

## Norwegian Content
The blog is written in Norwegian, so content changes should maintain Norwegian language and cultural context.