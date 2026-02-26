# AGENTS.md

## Cursor Cloud specific instructions

This is a static HTML/CSS/JS portfolio website (GitHub Pages site) with no build step, no package manager, and no runtime dependencies.

### Running the dev server

Serve the site locally with Python's built-in HTTP server:

```
python3 -m http.server 8080
```

Then open `http://localhost:8080/` in Chrome.

### Linting

The CI pipeline runs `html5validator` on the HTML files. Run locally:

```
html5validator --root /workspace/
```

Note: `style.css` has a pre-existing truncated media query (missing closing braces at EOF) that causes CSS parse errors. The CI step uses `continue-on-error: true`, so this is non-blocking.

### Known issues

- `style.css` is truncated at line 179 — the `@media` block for `max-width: 768px` is missing its closing `}` braces. This is a pre-existing issue in the repo.
