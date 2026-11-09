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
