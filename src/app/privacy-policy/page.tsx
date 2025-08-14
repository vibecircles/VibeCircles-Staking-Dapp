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
            VibeCircles Staking Privacy Policy
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
              Privacy Policy
            </h2>

            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#fafafaff" }}>
              Effective Date: [2025-08-14]
            </p>
            <p>Last Updated: [2025-08-14]</p>

            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#ffffffff" }}>
              VibeCircles (“we,” “our,” “us”) values your privacy and is committed to protecting your personal 
              information. This Privacy Policy explains how we collect, use, and safeguard your information when 
              you interact with our NFT staking platform (“Platform”), available at [https://staking.vibecircles.co.za/].
            </p>

            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#ffffffff" }}>
              By using VibeCircles NFT Staking, you agree to the practices described in this Privacy Policy. 
              If you do not agree, please discontinue use of the Platform.
            </p>

            <h3>1. Information We Collect</h3>
            <p>We may collect the following types of information when you use our Platform:</p>
            <h4>1.1 Wallet & Blockchain Information</h4>
            <ul>
              <li>Public wallet addresses</li>
              <li>Transaction history related to staking, unstaking, and rewards</li>
              <li>Blockchain network interactions</li>
            </ul>
            <h3>Note: We never store your private keys or seed phrases.</h3>

            <h4>1.2 Personal Information (if provided)</h4>
            <ul>
              <li>Email address (if you sign up for updates or support)</li>
              <li>Username or profile details (if you create an account)</li>
            </ul>

            <h4>1.3 Technical Information</h4>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Usage data and analytics</li>
            </ul>

            <h3>2. How We Use Your Information</h3>
            <p>We use the collected information to:</p>
            <ul>
              <li>Facilitate NFT staking, unstaking, and rewards distribution</li>
              <li>Provide customer support</li>
              <li>Improve platform performance and security</li>
              <li>Send service-related updates and announcements</li>
              <li>Detect and prevent fraudulent activities</li>
            </ul>
            
            <h3>3. Sharing Your Information</h3>
            <p>We do not sell your personal information. However, we may share limited information:</p>
            <ul>
              <li>With service providers to operate our platform (e.g., analytics tools, hosting)</li>
              <li>As required by law or in response to valid legal requests</li>
              <li>In connection with a business transfer (e.g., merger, acquisition)</li>
            </ul>

            <h3>4. Blockchain Transparency</h3>
            <p>Transactions made through the Platform are recorded on public blockchains, 
              which are transparent and accessible to anyone. Your wallet address and transaction history will be 
              visible publicly and permanently.</p>

            <h3>5. Data Security</h3>
            <p>We use industry-standard measures to protect your information, including encryption and secure servers. 
              However, we cannot guarantee 100% security, especially for blockchain transactions which are inherently 
              irreversible.</p>

            <h3>6. Third-Party Services</h3>
            <p>Our Platform may contain links or integrations with third-party services, such as crypto wallets, 
              NFT marketplaces, and analytics providers. We are not responsible for the privacy practices of these 
              third parties.</p>

            <h3>7. Your Rights</h3>
            <p>Depending on your jurisdiction, you may have rights to:</p>
            <ul>
              <li>Access, correct, or delete your personal data</li>
              <li>Withdraw consent (where applicable)</li>
              <li>Opt out of certain data uses</li>
            </ul>
            <p>To exercise your rights, contact us at: [support@vibecircles.co.za].</p>

            <h3>8. International Users</h3>
            <p>Your information may be processed in countries other than your own. 
              By using our Platform, you consent to such transfers.</p>

            <h3>9. Children’s Privacy</h3>
            <p>Our Platform is not intended for individuals under the age of 18. 
              We do not knowingly collect personal information from minors.</p>

            <h3>10. Changes to This Privacy Policy</h3>
            <p>We may update this Privacy Policy from time to time. 
              Changes will be posted with the “Last Updated” date at the top of this page.</p>

            <h3>11. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
            <ul>
              <li>Email: [contact@vibecircles.co.za]</li>
              <li>Website: [https://staking.vibecircles.co.za/]</li>
            </ul>

          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
