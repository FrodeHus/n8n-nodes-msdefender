# Copilot Instructions for n8n-nodes-msdefender

## Overview
- This repo is an n8n community node package that integrates Microsoft Defender APIs.
- The primary node is defined in [nodes/Msdefender/Msdefender.node.ts](../nodes/Msdefender/Msdefender.node.ts); it aggregates per-resource operation descriptions imported from resource modules.
- Each resource lives under [nodes/Msdefender/resources](../nodes/Msdefender/resources) and exports a `<resource>Description` array combining an "Operation" selector and operation-specific properties.

## Dev & Build Workflow
- Install deps and build: `npm ci` → `npm run build` (emits to `dist/`).
- Local development: `npm run dev` (from `@n8n/node-cli`).
- Lint and format: `npm run lint` / `npm run lint:fix` (uses [eslint.config.mjs](../eslint.config.mjs)).
- Release automation: `npm run prepublishOnly` (prerelease checks) and `npm run release`.
- TypeScript output targets [tsconfig.json](../tsconfig.json) with `outDir` `dist/`; `n8n` manifest in [package.json](../package.json) references built files in `dist/`.

## Credentials & Authentication
- OAuth2 Client Credentials defined in [credentials/MsdefenderOAuth2Api.credentials.ts](../credentials/MsdefenderOAuth2Api.credentials.ts).
  - Extends `oAuth2Api`; grant type `clientCredentials`; access token URL template `https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token`.
  - Default scope `https://api.securitycenter.microsoft.com/.default`.
  - Credential test calls `GET /api/exposureScore` to validate.
- The node requires these credentials and sets `requestDefaults` with `baseURL` `https://api.securitycenter.microsoft.com/` and JSON headers.

## Resource & Operation Pattern
- Resource entry (e.g., [resources/advancedQuery/index.ts](../nodes/Msdefender/resources/advancedQuery/index.ts)) declares an `Operation` option and merges operation descriptions from sibling files.
- Operations use `routing.request` for HTTP method and path, and `routing.send` to map UI properties to query/body.
  - Example: [advanced query input](../nodes/Msdefender/resources/advancedQuery/run.ts) maps `KQL Query` to request body `Query` and posts to `/api/advancedqueries/run`.
- List-style endpoints define `Limit`, `Skip`, and `Return All` behaviors via shared OData properties.

## OData Pagination Conventions
- Shared properties in [nodes/Msdefender/shared/odataProperties.ts](../nodes/Msdefender/shared/odataProperties.ts) provide `$top`, `$skip`, and a generic pagination strategy.
- `returnAll: true` enables `routing.operations.pagination` using `getNextODataLink()`; implement it to read `@odata.nextLink` from API responses.
  - Current stub lives in [nodes/Msdefender/shared/utils.ts](../nodes/Msdefender/shared/utils.ts); update it when adding real pagination.

## Adding Resources or Operations
1. Create a new folder under `nodes/Msdefender/resources/<resource>/` with `index.ts` exporting `<resource>Description` and one file per operation.
2. In each operation file, scope properties with `displayOptions.show` to the resource and operation.
3. Define `routing.request` (method + URL) and map inputs via `routing.send`.
4. For list endpoints, include `commonOdataProperties` to support `$top`, `$skip`, and `returnAll`.
5. Import and spread your description into the node in [Msdefender.node.ts](../nodes/Msdefender/Msdefender.node.ts).

## Project Conventions
- TypeScript is strict per [tsconfig.json](../tsconfig.json) (no implicit `any`, strict null checks, etc.).
- Naming: `<resource>Description` arrays and `<operation>Description` per-operation files (e.g., [resources/machine/index.ts](../nodes/Msdefender/resources/machine/index.ts)).
- Headers: default JSON `Accept` and `Content-Type` set globally via `requestDefaults`.

## Quick Examples
- Alerts: `GET /api/alerts` defined in [resources/alert/index.ts](../nodes/Msdefender/resources/alert/index.ts), with `Limit` + `Expand evidence` options in [getAll](../nodes/Msdefender/resources/alert/getAll.ts).
- Machines: routing and operations in [resources/machine/index.ts](../nodes/Msdefender/resources/machine/index.ts) demonstrate URL scoping and option structuring.

## Notes
- CI is present (badge in README); ensure new operations adhere to lint rules and compile to `dist/`.
- When wiring credentials, the node’s `credentials` section expects `msdefenderOAuth2Api` and `authentication: oAuth2`.
