# ERC-721 Staking DApp Setup Guide

## Prerequisites
- Node.js (v16 or higher)
- A thirdweb account
- Some test ETH for gas fees

## Setup Steps

### 1. Get Your Thirdweb Client ID
1. Go to [thirdweb dashboard](https://thirdweb.com/dashboard)
2. Create a new project or use an existing one
3. Copy your Client ID from the project settings

### 2. Create Environment File
Create a `.env.local` file in your project root with:
```
NEXT_PUBLIC_CLIENT_ID=your_thirdweb_client_id_here
```

### 3. Deploy Your Smart Contracts
You need to deploy three contracts:
1. **NFT Contract** - Your ERC-721 NFT collection
2. **Reward Token Contract** - ERC-20 token for staking rewards
3. **Staking Contract** - The staking contract (already has ABI)

#### Option A: Use thirdweb Dashboard
1. Go to [thirdweb dashboard](https://thirdweb.com/dashboard)
2. Deploy contracts using the dashboard
3. Copy the deployed contract addresses

#### Option B: Use thirdweb CLI
```bash
npx thirdweb deploy
```

### 4. Update Contract Addresses
Edit `utils/contracts.ts` and replace the placeholder addresses:
```typescript
const nftContractAddress = "0x..."; // Your deployed NFT contract
const rewardTokenContractAddress = "0x..."; // Your deployed reward token contract
const stakingContractAddress = "0x..."; // Your deployed staking contract
```

### 5. Configure Chain
The app is currently configured to use Sepolia testnet. If you want to use a different chain:
1. Edit `src/app/chain.ts`
2. Change the chain configuration to your preferred network

### 6. Install Dependencies and Run
```bash
npm install
npm run dev
```

## Troubleshooting

### Common Issues

1. **"NEXT_PUBLIC_CLIENT_ID is not set"**
   - Make sure you created the `.env.local` file
   - Verify your Client ID is correct

2. **"Contract address is not set"**
   - Deploy your contracts first
   - Update the addresses in `utils/contracts.ts`

3. **Transaction preparation errors**
   - Check that your wallet is connected to the correct network
   - Ensure you have enough ETH for gas fees
   - Verify contract addresses are correct

4. **"Failed to fetch owned NFTs"**
   - Check that your NFT contract is deployed and accessible
   - Verify the contract address is correct
   - Make sure you own some NFTs on the specified chain

### Testing
1. Mint some NFTs to your wallet
2. Approve the staking contract to spend your NFTs
3. Stake your NFTs
4. Wait for rewards to accumulate
5. Claim your rewards

## Chain Configuration
Currently using Sepolia testnet. To change:
- Edit `src/app/chain.ts`
- Update the chain definition
- Make sure your contracts are deployed on the new chain

## Support
If you encounter issues:
1. Check the browser console for error messages
2. Verify all environment variables are set
3. Ensure contracts are deployed and accessible
4. Check that your wallet is connected to the correct network 