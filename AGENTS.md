# Shared Hexo website

- Keep Hexo, the NexT theme, existing Markdown content, and existing page URLs.
- `source/` is the only editable content source. Do not maintain a second set
  of articles for Sites. Do not replace this project with a different framework.
- `npm run build` builds Hexo into `public/`; its `postbuild` script copies the
  exact output to `dist/` for Sites. Both directories are generated and ignored.
- GitHub Pages continues to publish `public/` using `.github/workflows/pages.yml`.
- `.openai/hosting.json` identifies the existing Sites project. Reuse its ID and
  preserve its audience. Never create another Site for this same website.
- Preserve the original GitHub `origin` and Git history. Sites uses an additional
  source repository. Never replace `origin`, force-push, reset, or discard changes
  to synchronize the two repositories.
- When continuing from Sites, first inspect both source histories and local
  edits. Fetch and reconcile newer GitHub commits before editing. When publishing
  to both hosts, build once and publish the same source commit to both. Sites
  publication alone does not update GitHub Pages; report which hosts were updated.
- Inspect Git state before changing files. Keep content placeholders and planned
  work distinguishable from completed projects and validated results.
- Keep visible pages free of concrete code, shell commands, and code screenshots.
  Explain project context, methods, learning, and documented results in Chinese.
- Use docs/CONTENT_SOURCES.md for repository snapshots and attribution. Distinguish
  personal projects, open-source adaptations, learning exercises, and references.
- Label diagrams as illustrations and upstream demos as upstream material. Preserve
  image source captions and license files when reusing assets.

- Preserve the existing Hexo/NexT theme styling unless the user requests a visual redesign.
- The real name may appear only on the resume page. Use dongz803 for global author,
  sidebar, footer, metadata and Site titles.
