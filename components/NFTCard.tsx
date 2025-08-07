import { client } from "@/app/client";
import { NFT, prepareContractCall } from "thirdweb";
import { MediaRenderer, TransactionButton } from "thirdweb/react";
import { NFT_CONTRACT, STAKING_CONTRACT, REWARD_TOKEN_CONTRACT, stakingContractAddress } from "../utils/contracts";
import { useState, useEffect } from "react";
import { approve, getApproved } from "thirdweb/extensions/erc721";
import { useActiveAccount } from "thirdweb/react";

type OwnedNFTsProps = {
    nft: NFT;
    refetch: () => void;
    refecthStakedInfo: () => void;
};

export const NFTCard = ({ nft, refetch, refecthStakedInfo }: OwnedNFTsProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isApproved, setIsApproved] = useState(false);
    const [isCheckingApproval, setIsCheckingApproval] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const account = useActiveAccount();

    // Check approval status when component mounts or when modal opens
    const checkApprovalStatus = async () => {
        if (!account?.address) return;
        
        try {
            setIsCheckingApproval(true);
            setError(null);
            
            console.log("Checking approval for token:", nft.id);
            console.log("User address:", account.address);
            console.log("Staking contract address:", stakingContractAddress);
            

            
            const approvedAddress = await getApproved({
                contract: NFT_CONTRACT,
                tokenId: nft.id,
            });
            
            console.log("Approved address:", approvedAddress);
            console.log("Is approved:", approvedAddress === stakingContractAddress);
            
            setIsApproved(approvedAddress === stakingContractAddress);
        } catch (err) {
            console.error("Error checking approval status:", err);
            setError("Failed to check approval status");
        } finally {
            setIsCheckingApproval(false);
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            console.log("=== Contract Addresses ===");
            console.log("NFT Contract:", NFT_CONTRACT.address);
            console.log("Staking Contract:", stakingContractAddress);
            console.log("Reward Token Contract:", REWARD_TOKEN_CONTRACT.address);
            console.log("User Address:", account?.address);
            console.log("========================");
            
            checkApprovalStatus();
        }
    }, [isModalOpen, account?.address]);



    const handleApprove = () => {
        console.log("Approving NFT:", nft.id);
        console.log("Approving to address:", stakingContractAddress);
        
        return approve({
            contract: NFT_CONTRACT,
            to: stakingContractAddress,
            tokenId: nft.id
        });
    };

    const handleStake = () => {
        console.log("Attempting to stake NFT:", nft.id);
                    console.log("Staking contract address:", stakingContractAddress);
        console.log("NFT contract address:", NFT_CONTRACT.address);
        
        return prepareContractCall({
            contract: STAKING_CONTRACT,
            method: "stake",
            params: [[nft.id]]
        });
    };

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
                src={nft.metadata.image}
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
            }}>{nft.metadata.name}</p>
            <button
                onClick={() => setIsModalOpen(true)}
                style={{
                    border: "none",
                    backgroundColor: "#667eea",
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
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#5a6fd8";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#667eea";
                }}
            >Stake</button>
            {isModalOpen && (
                <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1000,
                    padding: "20px"
                }}>
                    <div style={{
                        width: "100%",
                        maxWidth: "400px",
                        backgroundColor: "#222",
                        padding: "24px",
                        borderRadius: "12px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "relative",
                        maxHeight: "90vh",
                        overflow: "auto"
                    }}>
                        <div style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            width: "100%",
                            marginBottom: "16px"
                        }}>
                            <button
                                onClick={() => {
                                    setIsModalOpen(false);
                                    setError(null);
                                }}
                                style={{
                                    border: "none",
                                    backgroundColor: "transparent",
                                    color: "#fff",
                                    cursor: "pointer",
                                    fontSize: "18px",
                                    padding: "8px",
                                    borderRadius: "4px",
                                    transition: "background-color 0.2s ease"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "transparent";
                                }}
                            >✕</button>
                        </div>
                        <h3 style={{ 
                            margin: "0 0 16px 0",
                            fontSize: "clamp(18px, 4vw, 20px)",
                            textAlign: "center"
                        }}>You are about to stake:</h3>
                        <MediaRenderer
                            client={client}
                            src={nft.metadata.image}
                            style={{
                                borderRadius: "8px",
                                marginBottom: "20px",
                                width: "100%",
                                maxWidth: "200px",
                                height: "auto",
                                aspectRatio: "1",
                                objectFit: "cover"
                            }}
                        />
                        
                        {/* Error Message */}
                        {error && (
                            <div style={{
                                backgroundColor: "rgba(255, 0, 0, 0.1)",
                                border: "1px solid #ff4444",
                                borderRadius: "8px",
                                padding: "12px",
                                marginBottom: "16px",
                                width: "100%",
                                textAlign: "center"
                            }}>
                                <p style={{ color: "#ff4444", margin: 0, fontSize: "14px" }}>
                                    {error}
                                </p>
                            </div>
                        )}
                        
                        <div style={{ width: "100%" }}>
                            {isCheckingApproval ? (
                                <div style={{
                                    width: "100%",
                                    padding: "12px",
                                    textAlign: "center",
                                    color: "#888"
                                }}>
                                    Checking approval status...
                                </div>
                            ) : !isApproved ? (
                                <div style={{ width: "100%" }}>
                                    <TransactionButton
                                        transaction={handleApprove}
                                        onTransactionSent={(tx) => {
                                            console.log("Approval transaction sent:", tx);
                                        }}
                                        style={{
                                            width: "100%",
                                            padding: "12px",
                                            fontSize: "clamp(14px, 3vw, 16px)",
                                            fontWeight: "600",
                                            marginBottom: "8px"
                                        }}
                                        onTransactionConfirmed={() => {
                                            console.log("Approval transaction confirmed!");
                                            setIsApproved(true);
                                            setError(null);
                                            checkApprovalStatus();
                                        }}
                                    >Approve</TransactionButton>
                                    <button
                                        onClick={checkApprovalStatus}
                                        style={{
                                            width: "100%",
                                            padding: "8px",
                                            fontSize: "12px",
                                            backgroundColor: "transparent",
                                            border: "1px solid #666",
                                            color: "#888",
                                            borderRadius: "4px",
                                            cursor: "pointer"
                                        }}
                                    >
                                        Refresh Approval Status
                                    </button>
                                </div>
                            ) : (
                                <TransactionButton
                                    transaction={handleStake}
                                    onTransactionSent={(tx) => {
                                        console.log("Staking transaction sent:", tx);
                                    }}
                                    onTransactionConfirmed={() => {
                                        console.log("Staking transaction confirmed!");
                                        alert("Staked successfully!");
                                        setIsModalOpen(false);
                                        setError(null);
                                        refetch();
                                        refecthStakedInfo();
                                    }}

                                    style={{
                                        width: "100%",
                                        padding: "12px",
                                        fontSize: "clamp(14px, 3vw, 16px)",
                                        fontWeight: "600"
                                    }}
                                >Stake</TransactionButton>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
};