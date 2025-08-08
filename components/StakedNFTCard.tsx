import { MediaRenderer, TransactionButton, useReadContract } from "thirdweb/react";
import { NFT_CONTRACT, STAKING_CONTRACT } from "../utils/contracts";
import { getNFT } from "thirdweb/extensions/erc721";
import { client } from "@/app/client";
import { prepareContractCall } from "thirdweb";

type StakedNFTCardProps = {
    tokenId: bigint;
    refetchStakedInfo: () => void;
    refetchOwnedNFTs: () => void;
};

export const StakedNFTCard: React.FC<StakedNFTCardProps> = ({ tokenId, refetchStakedInfo, refetchOwnedNFTs }) => {
    const { data: nft } = useReadContract(
        getNFT,
        {
            contract: NFT_CONTRACT,
            tokenId: tokenId,
        }
    );
    
    return (
        <div style={{ 
            margin: "8px",
            minWidth: "150px",
            maxWidth: "250px",
            flex: "1 1 auto",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#1a1a1a",
            borderRadius: "12px",
            padding: "12px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease"
        }}>
            <MediaRenderer
                client={client}
                src={nft?.metadata.image}
                style={{
                    borderRadius: "8px",
                    marginBottom: "12px",
                    width: "100%",
                    height: "auto",
                    aspectRatio: "1",
                    objectFit: "cover"
                }}
            />
            <p style={{ 
                margin: "0 0 12px 0",
                fontSize: "clamp(14px, 2.5vw, 16px)",
                fontWeight: "500",
                textAlign: "center",
                color: "#ffffff",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
            }}>{nft?.metadata.name}</p>
            <TransactionButton
                transaction={() => (
                    prepareContractCall({
                        contract: STAKING_CONTRACT,
                        method: "withdraw",
                        params: [[tokenId]]
                    })
                )}
                onTransactionConfirmed={() => {
                    refetchOwnedNFTs();
                    refetchStakedInfo();
                    alert("Withdrawn!");
                }}
                className="withdraw-button"
                style={{
                    border: "none",
                    backgroundColor: "#e74c3c",
                    color: "#fff",
                    padding: "12px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    width: "100%",
                    fontSize: "clamp(12px, 2.5vw, 14px)",
                    fontWeight: "600",
                    transition: "background-color 0.2s ease",
                    marginTop: "auto"
                }}
            >
                Withdraw
            </TransactionButton>

            <style jsx>{`
                .withdraw-button:hover {
                    background-color: #c0392b !important;
                }
            `}</style>
        </div>
    )
};
