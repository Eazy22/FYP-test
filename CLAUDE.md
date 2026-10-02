# CLAUDE.md

Context for Claude when working in this repo.

## Project
Israel's final year project (Nile University of Nigeria): a decentralised application. MERN backend plus smart contracts.

## Stack
- server/: Node 22, Express 5, Mongoose, ES modules. Tests: `node:test` + supertest.
- client/: React 19 + Vite, React Router, axios. Tests: Vitest + Testing Library.
- contracts/: not set up yet. Chain, Hardhat vs Foundry, and wallet library are still to be decided.

## Conventions
- Name files by resource: `user.model.js`, `user.routes.js`, `user.controller.js`.
- Keep controllers thin; move DB logic into models or services as it grows.
- Errors go through the central handler and return `{ message }`.
- Client API calls go through `client/src/api/client.js`, one file per resource.
- Never commit secrets, private keys or mnemonics. Only `.env.example` files with placeholders.

## Workflow
- Work on a branch and open a PR. Push straight to `main` only if Israel says so.
- Run `npm test` in the affected folder before pushing. CI must pass.
- Israel is learning: explain non-obvious code when asked, and don't hide complexity he'll need to defend.
