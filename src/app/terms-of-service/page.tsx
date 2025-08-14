import React from 'react';
import Link from 'next/link';
import Footer from '../../../components/Footer';

export default function PrivacyPage() {
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
            VibeCircles Staking Terms of Service
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
              Terms of Service
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
        </div>
      </main>
      <Footer />
    </div>
  );
} 