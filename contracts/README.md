# contracts/

Smart contracts live here. This folder is a placeholder until the stack is chosen:

- Blockchain / testnet (e.g. Ethereum Sepolia)
- Framework: Hardhat or Foundry
- Wallet library for the client (e.g. wagmi + viem, ethers.js)

Once chosen, set it up with `/contract new`. CI starts testing this folder automatically as soon as `contracts/package.json` exists. Hardhat works as is; Foundry needs a small CI change.

Never commit private keys or mnemonics. Use `.env` (ignored) and commit only `.env.example`.
