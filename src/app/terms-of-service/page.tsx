import React from 'react';
import Link from 'next/link';
import Footer from '../../../components/Footer';

export default function TermsPage() {
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
              color: "#ffffffff",
            }}>
              Terms of Service
            </h2>

            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#fafafaff" }}>
              Effective Date: [2025-08-14]
            </p>

            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#ffffffff" }}>
              Welcome to VibeCircles NFT Staking (“VibeCircles,” “we,” “our,” or “us”). These Terms of Service (“Terms”)
              govern your access to and use of the VibeCircles NFT staking platform (the “Platform”), including staking,
              rewards, and any related services provided by VibeCircles.
            </p>

            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#ffffffff" }}>
              By using our Platform, you agree to these Terms. If you do not agree, you must not use the Platform.
            </p>

            <h3>1. Eligibility</h3>
            <ul>
              <li>You must be at least 18 years old or the legal age of majority in your jurisdiction.</li>
              <li>You are solely responsible for ensuring your participation complies with applicable laws.</li>
              <li>You confirm you are not in a jurisdiction where NFT staking is prohibited.</li>
            </ul>

            <h3>2. Nature of the Service</h3>
            <ul>
              <li>VibeCircles provides a decentralized staking mechanism for eligible NFTs.</li>
              <li>Rewards are not guaranteed and may fluctuate.</li>
              <li>Transactions are executed via blockchain smart contracts.</li>
            </ul>

            <h3>3. User Responsibilities</h3>
            <h4>3.1. You are solely responsible for:</h4>
            <ul>
              <li>Maintaining control over your wallet, private keys, and recovery phrases.</li>
              <li>Verifying the authenticity of NFTs before staking.</li>
              <li>Ensuring you understand how staking works before participating.</li>
              <li>Loss of access to your wallet or errors in transactions may result in a permanent loss of your NFTs or rewards.</li>
            </ul>

            <h3>4. Smart Contracts & Risks</h3>
            <p>4.1. Staking occurs through smart contracts that are immutable and 
                transparent but may contain bugs, vulnerabilities, or exploits.</p>
            <p>4.2. By staking, you acknowledge and accept the inherent risks of 
                blockchain technology, including but not limited to:</p>
            <ul>
              <li>Permanent loss of assets due to contract errors, exploits, or hacks.</li>
              <li>Network congestion or downtime.</li>
              <li>Price volatility of NFTs and any reward tokens.</li>
            </ul>
            <p>4.3. VibeCircles is not responsible for any on-chain losses, 
                security breaches, or technical failures beyond our control.</p>

            <h3>5. Rewards</h3>
            <p>5.1. Rewards may be distributed in the form of tokens, NFTs, or other digital assets.</p>
            <p>5.2. Reward rates are not fixed and can change at any time without prior notice.</p>
            <p>5.3. VibeCircles reserves the right to modify, pause, 
                or terminate the reward program at its sole discretion.</p>

            <h3>6. No Financial Advice</h3>
            <p>6.1. Nothing on the Platform should be considered investment, legal, or tax advice.</p>
            <p>6.2. You should consult your own advisors before making any staking or financial decisions.</p>

            <h3>7. Fees</h3>
            <p>7.1. Certain transactions may incur blockchain (“gas”) fees, which are paid directly to the 
                network and not to VibeCircles.</p>
            <p>7.2. We may introduce platform service fees in the future, with prior notice.</p>

            <h3>8. Prohibited Activities</h3>
            <h4>You agree not to:</h4>
            <ul>
              <li>Use the Platform for any unlawful or fraudulent purpose.</li>
              <li>Attempt to hack, disrupt, or exploit the Platform’s smart contracts.</li>
              <li>Misrepresent ownership of NFTs.</li>
            </ul>

            <h3>9. Disclaimers & Limitation of Liability</h3>
            <p>9.1. The Platform is provided “as is” and “as available” without warranties of any kind.</p>
            <p>9.2. To the fullest extent permitted by law, VibeCircles is not liable for any direct, indirect, incidental, 
                or consequential losses arising from your use of the Platform.</p>
            <p>9.3. You stake NFTs entirely at your own risk.</p>

            <h3>10. Changes to These Terms</h3>
            <p>10.1. We may update these Terms at any time. Changes will be effective when posted on the Platform.</p>
            <p>10.2. Continued use of the Platform after changes constitutes acceptance of the updated Terms.</p>

            <h3>11. Governing Law & Dispute Resolution</h3>
            <p>11.1. These Terms are governed by the laws of [South Africa].</p>
            <p>11.2. Any disputes will be resolved through binding arbitration or small claims court, unless otherwise required by law.</p>

            <h3>12. Contact</h3>
            <p>For questions about these Terms, contact us at: [support@vibecircles.co.za]</p>

            <h3>Risk Disclosure</h3>
            <p>NFT staking involves significant risk, including total loss of your staked assets. Do not stake NFTs you cannot afford to lose.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
