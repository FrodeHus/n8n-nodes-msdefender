# Repository Guidelines

## Project Structure & Module Organization

- `nodes/Msdefender/`: TypeScript source for nodes and triggers (`*.node.ts`) plus JSON descriptors.
- `nodes/Msdefender/resources/`: Resource-specific operations and helpers.
- `nodes/Msdefender/shared/`: Shared utilities used across nodes.
- `credentials/`: OAuth2 credential definitions for Defender and Defender XDR.
- `dist/`: Built output consumed by n8n (generated).
- `icons/` and `images/`: Asset files used by nodes and docs.

## Build, Test, and Development Commands

- `npm run build`: Build TypeScript into `dist/` using `n8n-node build`.
- `npm run build:watch`: Watch TypeScript compile for rapid iteration.
- `npm run dev`: Run the n8n node dev workflow for local testing.
- `npm run lint`: Run the n8n ESLint ruleset.
- `npm run lint:fix`: Auto-fix lint issues where possible.
- `npm run release`: Run the release workflow (release-it).
- `npm run prepublishOnly`: Prepare a prerelease build before publishing.

## Coding Style & Naming Conventions

- Indentation follows tabs in `tsconfig.json`; match existing style in TypeScript and JSON files.
- Node and trigger files follow `PascalCase` naming (`Msdefender.node.ts`, `MsdefenderTrigger.node.ts`).
- Use the n8n node CLI ESLint config (`eslint.config.mjs`) and Prettier for formatting.

## Testing Guidelines

- No dedicated test suite is present in the repo.
- Validate changes by running `npm run lint` and exercising nodes in an n8n dev instance via `npm run dev`.

## Commit & Pull Request Guidelines

- Recent commits use a mix of `feat:` / `fix:` prefixes and `Release x.y.z` messages; keep that style consistent.
- PRs often include issue numbers (e.g., `(#43)`) in commit messages when applicable.
- In PRs, describe behavior changes, note affected nodes/resources, and include any required permission or API changes.

## Security & Configuration Tips

- OAuth2 credentials live in `credentials/` and should match the Microsoft Defender API scopes documented in `README.md`.
- Never commit client secrets; rely on n8n credential storage for secrets.
