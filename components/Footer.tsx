import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">VibeCircles Staking</h3>
          <p className="footer-description">
            Stake, Earn have fun. Built for friends, by friends for good vibes.
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="https://web3.vibecircles.co.za/" className="footer-link">Buy NFTs</a></li>
            <li><a href="https://vibecircles.co.za/" className="footer-link">Company</a></li>
            <li><Link href="/about" className="footer-link">About</Link></li>
            <li><a href="https://store.vibecircles.co.za/" className="footer-link">Merch</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Connect</h4>
          <div className="social-links">
            <a href="https://x.com/vibecircles" className="social-link" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>

{/* Facebook */}
<a href="https://www.facebook.com/people/VibeCircles" className="social-link" aria-label="Facebook">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 
             1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 
             4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 
             0-1.796.716-1.796 1.765v2.316h3.587l-.467 3.622h-3.12V24h6.116C23.406 
             24 24 23.406 24 22.676V1.325C24 .593 23.406 0 22.675 0z"/>
  </svg>
</a>

{/* Instagram */}
<a href="https://www.instagram.com/vibecircles/" className="social-link" aria-label="Instagram">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 
             16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 
             7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 
             7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 
             0 16.25 3.5h-8.5zm8.75 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 
             1 0-1.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 
             0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/>
  </svg>
</a>

{/* TikTok */}
<a href="https://www.tiktok.com/@vibecircles" className="social-link" aria-label="TikTok">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2h2.75a6.25 6.25 0 0 0 6.25 6.25V11a8.75 8.75 0 0 
             1-5-1.57V15a7 7 0 1 1-7-7v3.17a3.83 3.83 0 1 0 2.75 
             3.66V2z"/>
  </svg>
</a>
            <a href="https://github.com/vibecircles" className="social-link" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            © {currentYear} VibeCircles. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link href="/privacy-policy" className="footer-link">Privacy Policy</Link>
            <Link href="/terms-of-service" className="footer-link">Terms of Service</Link>
            <a href="#" className="footer-link">Documentation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 