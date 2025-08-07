'use client';

import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { ConnectButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { StakeRewards } from "./StakeRewards";
import { NFT_CONTRACT, STAKING_CONTRACT } from "../utils/contracts";
import { NFT } from "thirdweb";
import { useEffect, useState } from "react";
import { getNFTs, ownerOf, totalSupply } from "thirdweb/extensions/erc721";
import { NFTCard } from "./NFTCard";
import { StakedNFTCard } from "./StakedNFTCard";

export const Staking = () => {
    const account = useActiveAccount();

    const [ownedNFTs, setOwnedNFTs] = useState<NFT[]>([]);
    
    const getOwnedNFTs = async () => {
        let ownedNFTs: NFT[] = [];

        const totalNFTSupply = await totalSupply({
            contract: NFT_CONTRACT,
        });
        const nfts = await getNFTs({
            contract: NFT_CONTRACT,
            start: 0,
            count: parseInt(totalNFTSupply.toString()),
        });
        
        for (let nft of nfts) {
            const owner = await ownerOf({
                contract: NFT_CONTRACT,
                tokenId: nft.id,
            });
            if (owner === account?.address) {
                ownedNFTs.push(nft);
            }
        }
        setOwnedNFTs(ownedNFTs);
    };
    
    useEffect(() => {
        if(account) {
            getOwnedNFTs();
        }
    }, [account]);

    const {
        data: stakedInfo,
        refetch: refetchStakedInfo,
    } = useReadContract({
        contract: STAKING_CONTRACT,
        method: "getStakeInfo",
        params: [account?.address || ""],
    });
    
    if(account) {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#151515",
                borderRadius: "12px",
                width: "100%",
                maxWidth: "1200px",
                padding: "24px",
                margin: "0 auto",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
            }}>
                <ConnectButton
                    client={client}
                    chain={chain}
                />
                <div style={{ 
                    margin: "24px 0",
                    width: "100%"
                }}>
                    <h2 style={{
                        fontSize: "clamp(20px, 4vw, 24px)",
                        margin: "0 0 16px 0",
                        textAlign: "center",
                        color: "#ffffff"
                    }}>Owned NFTs</h2>
                    <div style={{ 
                        display: "flex", 
                        flexDirection: "row", 
                        flexWrap: "wrap", 
                        justifyContent: "center",
                        gap: "8px",
                        width: "100%"
                    }}>
                        {ownedNFTs && ownedNFTs.length > 0 ? (
                            ownedNFTs.map((nft) => (
                                <NFTCard
                                    key={nft.id}
                                    nft={nft}
                                    refetch={getOwnedNFTs}
                                    refecthStakedInfo={refetchStakedInfo}
                                />
                            ))
                        ) : (
                            <p style={{
                                textAlign: "center",
                                color: "#888",
                                fontSize: "clamp(14px, 3vw, 16px)",
                                margin: "20px 0"
                            }}>You own 0 NFTs</p>
                        )}
                    </div>
                </div>
                <hr style={{
                    width: "100%",
                    border: "1px solid #333",
                    margin: "24px 0"
                }}/>
                <div style={{ width: "100%", margin: "24px 0" }}>
                    <h2 style={{
                        fontSize: "clamp(20px, 4vw, 24px)",
                        margin: "0 0 16px 0",
                        textAlign: "center",
                        color: "#ffffff"
                    }}>Staked NFTs</h2>
                    <div style={{ 
                        display: "flex", 
                        flexDirection: "row", 
                        flexWrap: "wrap", 
                        justifyContent: "center",
                        gap: "8px",
                        width: "100%"
                    }}>
                        {stakedInfo && stakedInfo[0].length > 0 ? (
                            stakedInfo[0].map((nft: any, index: number) => (
                                <StakedNFTCard
                                    key={index}
                                    tokenId={nft}
                                    refetchStakedInfo={refetchStakedInfo}
                                    refetchOwnedNFTs={getOwnedNFTs}
                                />
                            ))
                        ) : (
                            <p style={{ 
                                textAlign: "center",
                                color: "#888",
                                fontSize: "clamp(14px, 3vw, 16px)",
                                margin: "20px 0"
                            }}>No NFTs staked</p>
                        )}
                    </div>
                </div>
                <hr style={{
                    width: "100%",
                    border: "1px solid #333",
                    margin: "24px 0"
                }}/>
                <StakeRewards />  
            </div>
        );
    }
};