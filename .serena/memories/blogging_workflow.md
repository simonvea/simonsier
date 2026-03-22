# Blogging Workflow

## Writing new posts
- Use the `/blogg` skill: invoke with `/blogg [topic]` to get a full post in Simon's style
- Style reference document: `blogg-stil-systemprompt.md` in project root
- Posts go in `src/posts/YYYY-MM-DD-slug.md`

## Style notes (non-obvious)
- Content is in Norwegian (bokmål)
- No em-dashes in body text — use periods or parentheses instead; em-dashes read as AI-generated
- No hard line breaks mid-paragraph in the markdown source (each paragraph = one line)
- Post titles: concrete and direct, not clickbait
- Description field: a complete sentence that reveals the conclusion

## Post template
```yaml
---
title: Tittel
date: YYYY-MM-DD
description: En fullstendig setning som oppsummerer poenget.
---
```
