import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

export const nftContractAddress = "0x55106429E0aAD7007bA00149c14C7D0389811b78";
export const rewardTokenContractAddress = "0xB0cdF22ba6310d40572593458fBF25E0D87d68D8";
export const stakingContractAddress = "0xC10E89b53EC00FcD5390b401Fba897A45e54D4Ff";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});