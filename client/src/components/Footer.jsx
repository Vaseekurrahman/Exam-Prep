import React from "react";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerLeft}>
          <h2 style={styles.footerBrand}>Exam-Prep</h2>
          <p style={styles.footerText}>
            Empowering students to succeed through smart preparation.
          </p>
          <div style={styles.socialIcons}>
            <a href="#" style={styles.iconLink}>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" style={styles.iconLink}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" style={styles.iconLink}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" style={styles.iconLink}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>

        <div style={styles.footerLinks}>
          <div>
            <h4 style={styles.linkTitle}>Product</h4>
            <a href="#" style={styles.footerLink}>Features</a>
            <a href="#" style={styles.footerLink}>Practice Tests</a>
            <a href="#" style={styles.footerLink}>Analytics</a>
          </div>
          <div>
            <h4 style={styles.linkTitle}>Support</h4>
            <a href="#" style={styles.footerLink}>Help Center</a>
            <a href="#" style={styles.footerLink}>Contact Us</a>
            <a href="#" style={styles.footerLink}>Terms of Service</a>
          </div>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <p style={styles.footerBottomText}>
          © {new Date().getFullYear()} Exam-Prep. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#f9fafb",
    borderTop: "1px solid #e5e7eb",
    paddingTop: 40,
    paddingBottom: 20,
    marginTop: 60,
  },
  footerContent: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0 20px",
    flexWrap: "wrap",
  },
  footerLeft: {
    maxWidth: 400,
    marginBottom: 20,
  },
  footerBrand: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 8,
  },
  footerText: {
    fontSize: 16,
    color: "#6b7280",
  },
  socialIcons: {
    display: "flex",
    gap: 12,
    marginTop: 12,
  },
  iconLink: {
    width: 32,
    height: 32,
    backgroundColor: "#e5e7eb",
    color: "#374151",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    textDecoration: "none",
    transition: "background 0.3s, color 0.3s",
    fontSize: 14,
  },
  footerLinks: {
    display: "flex",
    gap: 40,
    flexWrap: "wrap",
  },
  linkTitle: {
    fontWeight: 600,
    color: "#1f2937",
    marginBottom: 12,
  },
  footerLink: {
    display: "block",
    marginBottom: 8,
    fontSize: 14,
    color: "#6b7280",
    textDecoration: "none",
    transition: "color 0.2s",
    cursor: "pointer",
  },
  footerBottom: {
    marginTop: 40,
    borderTop: "1px solid #e5e7eb",
    paddingTop: 20,
    textAlign: "center",
  },
  footerBottomText: {
    fontSize: 14,
    color: "#9ca3af",
  },
};

export default Footer;
