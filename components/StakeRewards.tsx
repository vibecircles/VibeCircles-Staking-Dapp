import { TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { REWARD_TOKEN_CONTRACT, STAKING_CONTRACT } from "../utils/contracts";
import { prepareContractCall, toEther } from "thirdweb";
import { useEffect, useState } from "react";
import { balanceOf } from "thirdweb/extensions/erc20";

export const StakeRewards = () => {
    const account = useActiveAccount();
    const [error, setError] = useState<string | null>(null);

    const {
        data: tokenBalance,
        isLoading: isTokenBalanceLoading,
        refetch: refetchTokenBalance,
    } = useReadContract({
        contract: REWARD_TOKEN_CONTRACT,
        method: "balanceOf",
        params: [account?.address || ""],
    });
    
    const {
        data: stakedInfo,
        refetch: refetchStakedInfo,
    } = useReadContract({
        contract: STAKING_CONTRACT,
        method: "getStakeInfo",
        params: [account?.address || ""],
    });

    useEffect(() => {
        console.log("=== StakeRewards Debug Info ===");
        console.log("User address:", account?.address);
        console.log("Staked info:", stakedInfo);
        console.log("Token balance:", tokenBalance);
        console.log("================================");
        
        refetchStakedInfo();
        const interval = setInterval(() => {
            refetchStakedInfo();
        }, 1000);
        return () => clearInterval(interval);
    }, [account?.address, stakedInfo, tokenBalance]);

    const handleClaimRewards = () => {
        console.log("=== CLAIM REWARDS DEBUG ===");
        console.log("Attempting to claim rewards...");
        console.log("User address:", account?.address);
        console.log("Available rewards:", stakedInfo && stakedInfo[1] ? toEther(BigInt(stakedInfo[1].toString())) : "0");
        
        return prepareContractCall({
            contract: STAKING_CONTRACT,
            method: "claimRewards",
        });
    };

    return (
        <div style={{ 
            width: "100%", 
            margin: "24px 0", 
            display: "flex", 
            flexDirection: "column",
            backgroundColor: "#1a1a1a",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
        }}>
            <h2 style={{ 
                margin: "0 0 16px 0",
                fontSize: "clamp(18px, 4vw, 20px)",
                textAlign: "center",
                color: "#ffffff"
            }}>Staking Rewards</h2>
            
            {!isTokenBalanceLoading && tokenBalance && (
                <p style={{
                    margin: "0 0 12px 0",
                    fontSize: "clamp(14px, 3vw, 16px)",
                    color: "#cccccc",
                    textAlign: "center"
                }}>
                    Wallet Balance: <span style={{ color: "#60a5fa", fontWeight: "600" }}>
                        {toEther(BigInt(tokenBalance.toString()))}
                    </span>
                </p>
            )}
            
            <p style={{
                margin: "0 0 20px 0",
                fontSize: "clamp(16px, 3.5vw, 18px)",
                color: "#ffffff",
                textAlign: "center",
                fontWeight: "600"
            }}>
                Available Rewards: <span style={{ color: "#10b981", fontWeight: "700" }}>
                    {stakedInfo && stakedInfo[1] ? toEther(BigInt(stakedInfo[1].toString())) : "0"}
                </span>
            </p>
            
            {/* Error Message */}
            {error && (
                <div style={{
                    backgroundColor: "rgba(255, 0, 0, 0.1)",
                    border: "1px solid #ff4444",
                    borderRadius: "8px",
                    padding: "12px",
                    marginBottom: "16px",
                    textAlign: "center"
                }}>
                    <p style={{ color: "#ff4444", margin: 0, fontSize: "14px" }}>
                        {error}
                    </p>
                </div>
            )}
            
            <TransactionButton
                transaction={handleClaimRewards}
                onTransactionSent={(tx) => {
                    console.log("=== TRANSACTION SENT ===");
                    console.log("Claim transaction sent:", tx);
                    console.log("Transaction hash:", tx.transactionHash);
                    setError(null);
                }}
                onTransactionConfirmed={() => {
                    console.log("=== TRANSACTION CONFIRMED ===");
                    console.log("Rewards claimed successfully!");
                    alert("Rewards claimed!")
                    setError(null);
                    refetchStakedInfo();
                    refetchTokenBalance();
                }}
                disabled={!stakedInfo || !stakedInfo[1] || BigInt(stakedInfo[1].toString()) === BigInt(0)}
                style={{
                    border: "none",
                    backgroundColor: (!stakedInfo || !stakedInfo[1] || BigInt(stakedInfo[1].toString()) === BigInt(0)) ? "#666" : "#10b981",
                    color: "#fff",
                    padding: "14px",
                    borderRadius: "8px",
                    cursor: (!stakedInfo || !stakedInfo[1] || BigInt(stakedInfo[1].toString()) === BigInt(0)) ? "not-allowed" : "pointer",
                    width: "100%",
                    fontSize: "clamp(14px, 3vw, 16px)",
                    fontWeight: "600",
                    transition: "background-color 0.2s ease"
                }}
            >
                {(!stakedInfo || !stakedInfo[1] || BigInt(stakedInfo[1].toString()) === BigInt(0)) ? "No Rewards to Claim" : "Claim Rewards"}
            </TransactionButton>
        </div>
    )
};