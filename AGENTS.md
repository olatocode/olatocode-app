# Project Rules

- Keep your responses concise and to the point.
- When in plan mode, always ask clarifying questions. Never assume design, tech stack, or features.
- If available, use sub-agents or background agents for research and planning.
- When in change or edit mode, do not implement features yourself; use sub-agents to preserve context window.
- Act as a coordinator only.
- After completing features, always run commands like lint, type check, and next build.
- Use the best model for the specific task: premium models for complex tasks, mid-tier for documentation.
- For UI design, you must always follow the UI design system defined in design.md.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
