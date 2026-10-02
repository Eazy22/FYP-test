# FYP dApp

Final year project: a decentralised application with a MERN backend (MongoDB, Express, React, Node) and smart contracts.

> Status: starter structure. The blockchain, contract framework and wallet library haven't been chosen yet.

## Folder map

```
client/      React (Vite) frontend
  src/api/         axios instance + one file per resource
  src/components/  reusable UI
  src/pages/       one per route
  src/context/     auth and global state
  src/hooks/
  src/utils/
server/      Express API
  src/config/      db connection
  src/models/      Mongoose schemas
  src/routes/
  src/controllers/
  src/middleware/  error handler (auth, validation later)
  src/utils/
  tests/           node:test + supertest
contracts/   smart contracts (placeholder until the stack is chosen)
.github/workflows/ci.yml   runs tests on every push to main and every PR
```

## Requirements
- Node.js 22.12 or newer
- A MongoDB connection string (MongoDB Atlas works)

## Setup
```bash
npm run install:all
cp server/.env.example server/.env   # then fill in real values
cp client/.env.example client/.env
npm run dev                          # API on :5000, client on :5173
```
On Windows PowerShell, use `copy` instead of `cp`.

## Environment variables
| File | Variable | Purpose |
|---|---|---|
| server/.env | `PORT` | API port (default 5000) |
| server/.env | `MONGO_URI` | MongoDB connection string |
| server/.env | `JWT_SECRET` | Secret for signing auth tokens |
| server/.env | `CLIENT_URL` | Allowed CORS origin (default http://localhost:5173) |
| client/.env | `VITE_API_URL` | API base URL (default http://localhost:5000/api) |

Never commit `.env` files. Only the `.env.example` files go into the repo.

## Scripts (from the repo root)
| Command | What it does |
|---|---|
| `npm run install:all` | Installs root, server and client dependencies |
| `npm run dev` | Runs server and client together |
| `npm test` | Runs server and client tests |

## CI
GitHub Actions runs server tests, client tests + build, and contract tests. Contract tests start automatically once `contracts/package.json` exists.
