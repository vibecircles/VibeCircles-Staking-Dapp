import React from 'react';
import Link from 'next/link';
import Footer from '../../../components/Footer';

export default function AboutPage() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    }}>
      <main style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px auto",
        maxWidth: "800px",
        padding: "0 20px",
        flex: 1,
      }}>
        {/* Header */}
        <div style={{
          textAlign: "center",
          marginBottom: "40px",
          width: "100%",
        }}>
          <h1 style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "10px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            About Our Staking Platform
          </h1>
          <p style={{
            fontSize: "1.1rem",
            color: "#666",
            maxWidth: "600px",
            margin: "0 auto",
          }}>
            Discover the future of NFT staking with our innovative blockchain platform
          </p>
        </div>

        {/* Navigation */}
        <nav style={{
          marginBottom: "40px",
          width: "100%",
        }}>
          <Link href="/" style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#667eea",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            transition: "background-color 0.3s ease",
          }}>
            ← Back to Staking
          </Link>
        </nav>

        {/* Content Sections */}
        <div style={{
          display: "grid",
          gap: "40px",
          width: "100%",
        }}>
          {/* Mission Section */}
          <section style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "30px",
            borderRadius: "16px",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}>
            <h2 style={{
              fontSize: "1.8rem",
              marginBottom: "20px",
              color: "#333",
            }}>
              Our Mission
            </h2>
            <p style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              color: "#555",
            }}>
              We're revolutionizing the NFT ecosystem by providing a secure, transparent, and user-friendly staking platform. 
              Our mission is to unlock the true potential of digital assets by enabling NFT holders to earn rewards while 
              maintaining ownership of their valuable collectibles.
            </p>
          </section>

          {/* Features Section */}
          <section style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "30px",
            borderRadius: "16px",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}>
            <h2 style={{
              fontSize: "1.8rem",
              marginBottom: "20px",
              color: "#333",
            }}>
              Key Features
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}>
              <div style={{
                padding: "20px",
                backgroundColor: "rgba(102, 126, 234, 0.1)",
                borderRadius: "12px",
                border: "1px solid rgba(102, 126, 234, 0.2)",
              }}>
                <h3 style={{
                  fontSize: "1.2rem",
                  marginBottom: "10px",
                  color: "#667eea",
                }}>
                  🔒 Secure Staking
                </h3>
                <p style={{ color: "#666" }}>
                  Advanced smart contracts ensure your NFTs are safe and secure while staking.
                </p>
              </div>
              <div style={{
                padding: "20px",
                backgroundColor: "rgba(102, 126, 234, 0.1)",
                borderRadius: "12px",
                border: "1px solid rgba(102, 126, 234, 0.2)",
              }}>
                <h3 style={{
                  fontSize: "1.2rem",
                  marginBottom: "10px",
                  color: "#667eea",
                }}>
                  💰 Earn Rewards
                </h3>
                <p style={{ color: "#666" }}>
                  Earn passive income through our innovative reward system while holding your NFTs.
                </p>
              </div>
              <div style={{
                padding: "20px",
                backgroundColor: "rgba(102, 126, 234, 0.1)",
                borderRadius: "12px",
                border: "1px solid rgba(102, 126, 234, 0.2)",
              }}>
                <h3 style={{
                  fontSize: "1.2rem",
                  marginBottom: "10px",
                  color: "#667eea",
                }}>
                  ⚡ Instant Withdrawal
                </h3>
                <p style={{ color: "#666" }}>
                  Withdraw your staked NFTs and rewards instantly with no lock-up periods.
                </p>
              </div>
              <div style={{
                padding: "20px",
                backgroundColor: "rgba(102, 126, 234, 0.1)",
                borderRadius: "12px",
                border: "1px solid rgba(102, 126, 234, 0.2)",
              }}>
                <h3 style={{
                  fontSize: "1.2rem",
                  marginBottom: "10px",
                  color: "#667eea",
                }}>
                  🌐 Multi-Chain Support
                </h3>
                <p style={{ color: "#666" }}>
                  Support for multiple blockchain networks for maximum accessibility.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
} 