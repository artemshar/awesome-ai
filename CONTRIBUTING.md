# Contributing to Awesome AI

Thanks for helping grow this curated list of AI tools, platforms, and resources. Humans and coding agents are both welcome.

## Easiest way: submit an issue

Use the **[Submit a tool](https://github.com/artemshar/awesome-ai/issues/new?template=submit-tool.yml)** form.

Fill in name, website, short description, and categories. Maintainers will add the entry to the source list and regenerate the README.

## Pull requests

If you prefer a PR (or you're an agent shipping a ready change), edit the **source file**, not only the README.

> **Important:** `README.md` is **generated**. Edits to README alone will be overwritten. Always update `src/data/awesome-ai-list.ts`.

### 1. Add the entry

Append an object to the `AwesomeAI` array in [`src/data/awesome-ai-list.ts`](src/data/awesome-ai-list.ts):

| Field | Required | Notes |
|-------|----------|--------|
| `title` | yes | Display name |
| `description` | yes | 1–2 clear sentences |
| `website` | yes | Official URL |
| `tags` | yes | From `TagType` (see below) |
| `preview` | no | Image URL, or `null` for auto screenshot |
| `source` | no | Repo URL if open source, otherwise `null` |

Example:

```typescript
{
  title: "Example AI Tool",
  description: "A powerful AI tool that helps developers write better code",
  website: "https://example-ai-tool.com",
  preview: null,
  source: "https://github.com/example/ai-tool",
  tags: ["opensource", "developmentEnvironment", "codeGeneration"],
}
```

### 2. Available tags

Use only tags from `TagType` in [`src/data/types.ts`](src/data/types.ts):

- `opensource` / `proprietary` — pick one
- `foundationModels` — core models and APIs
- `developmentEnvironment` — IDEs, assistants, testing, docs
- `appDevelopment` — full-stack / UI / backend generators
- `mediaGeneration` — image, video, audio
- `businessProductivity` — business and productivity
- `infrastructureOperations` — serving, deploy, security
- `researchEducation` — research and learning
- `versionControl` — git, PRs, code review
- `codeGeneration` — generators and CLI helpers
- `pluginsIntegrations` — plugins and integrations
- `contentGeneration` — text and content tools
- `projectManagement` — tasks and workflows
- `aiAgentsWorkflows` — agents and automation
- `favorite` — maintainer-only; do not add in submissions

Aim for 2–4 tags per item.

### 3. Regenerate the README

```bash
npm run generate-md
```

This rewrites `README.md` from `awesome-ai-list.ts`. Include both files in your PR.

### 4. Open the PR

```bash
git add src/data/awesome-ai-list.ts README.md
git commit -m "Add [Tool Name] to Awesome AI list"
```

Use a clear title like `Add [Tool Name] to Awesome AI list`.

## Guidelines

- Skip duplicates — search the list first
- Prefer accurate, up-to-date links
- Keep descriptions short and factual (avoid marketing hype)
- Choose tags that help discovery

## Local development

```bash
git clone https://github.com/artemshar/awesome-ai.git
cd awesome-ai
npm install
npm start          # site preview
npm run generate-md
```

## Need help?

- **[Submit a tool](https://github.com/artemshar/awesome-ai/issues/new?template=submit-tool.yml)** — suggest a listing
- **Issues** — bugs and site improvements
- **Pull requests** — ready-made list updates welcome

Thanks for contributing — may your robots stay friendly.

*You don't need to be afraid of animals, you just need to be able to get along with them.*
