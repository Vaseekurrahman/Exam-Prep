import { ArrowRight, BookOpen, Clock, Trophy, Users } from "lucide-react";
import { Link } from "react-router";
import Footer from "../../components/Footer";
import logo from "./Logo.png"; // Replace with actual path to logo

export function Home() {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Study Materials",
      description: "Access thousands of practice questions, study guides, and exam prep resources."
    },
    {
      icon: Clock,
      title: "Timed Practice Tests",
      description: "Simulate real exam conditions with our timer-based practice tests."
    },
    {
      icon: Trophy,
      title: "Performance Analytics",
      description: "Track your progress and identify areas for improvement with detailed analytics."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Get help from experienced tutors and join study groups with fellow students."
    }
  ];

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.leftSection}>
            <div style={styles.logoContainer}>
              {/* Replace logo below */}
              <img src={logo} alt="Exam Prep Logo" style={styles.logo} />
              <span style={styles.brandText}>Exam-Prep</span>
            </div>
            <nav style={styles.nav}>
              <a href="#" style={styles.navLink}>Subjects</a>
              <a href="#" style={styles.navLink}>Practice Tests</a>
              <a href="#" style={styles.navLink}>Analytics</a>
              <a href="#" style={styles.navLink}>Support</a>
            </nav>
          </div>
          <div style={styles.actions}>
            <Link to="/register"><button style={styles.outlineButton}>Register</button></Link>
           <Link to="/login"><button style={styles.outlineButton}>Sign In</button></Link>
           <Link to="/adlogin"><button style={styles.outlineButton}>Admin Login</button></Link>
            <button style={styles.primaryButton}>Get Started</button>
          </div>
        </div>
      </header>

      <section style={styles.heroSection}>
        <div style={styles.badge}>🎉 Over 100,000 students trust us</div>
        <h1 style={styles.heroTitle}>
          Master Your Exams with <br />Smart Preparation
        </h1>
        <p style={styles.heroSubtitle}>
          Join thousands of students who have achieved their academic goals with our comprehensive exam preparation platform.
        </p>
        <div style={styles.heroButtons}>
          <button style={styles.primaryButton}>
            Start Free Trial
            <ArrowRight size={16} style={{ marginLeft: 8 }} />
          </button>
          <button style={styles.outlineButton}>Watch Demo</button>
        </div>
      </section>

      <section style={styles.featuresSection}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Why Choose Exam-Prep?</h2>
          <p style={styles.sectionSubtitle}>Everything you need to succeed in your exams</p>
        </div>
        <div style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} style={styles.featureCard}>
              <div style={styles.iconContainer}>
                <feature.icon size={24} color="#2563eb" />
              </div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
}

// --- Styles ---
const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(to bottom right, #e0f2fe, #f3e8ff)",
    fontFamily: "sans-serif"
  },
  header: {
    backgroundColor: "white",
    borderBottom: "1px solid #e5e7eb",
    position: "sticky",
    top: 0,
    zIndex: 50
  },
  headerContent: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "12px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "nowrap"
  },
  leftSection: {
    display: "flex",
    alignItems: "center",
    gap: 40
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: 8
  },
  logo: {
    width: 48,
    height: 48,
    objectFit: "contain"
  },
  brandText: {
    fontSize: 22,
    fontWeight: 600,
    color: "#111827"
  },
  nav: {
    display: "flex",
    gap: 20
  },
  navLink: {
    color: "#374151",
    fontSize: 16,
    textDecoration: "none",
    transition: "color 0.2s",
    cursor: "pointer"
  },
  actions: {
    display: "flex",
    gap: 12
  },
  primaryButton: {
    padding: "8px 16px",
    background: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
    display: "flex",
    alignItems: "center"
  },
  outlineButton: {
    padding: "8px 16px",
    background: "white",
    border: "1px solid #ccc",
    borderRadius: 4,
    cursor: "pointer"
  },
  heroSection: {
    padding: "64px 20px",
    textAlign: "center"
  },
  badge: {
    display: "inline-block",
    backgroundColor: "#f0f0f0",
    padding: "4px 12px",
    borderRadius: 12,
    marginBottom: 16
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: "bold",
    background: "linear-gradient(to right, #2563eb, #7c3aed)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: 24
  },
  heroSubtitle: {
    fontSize: 20,
    color: "#666",
    maxWidth: 600,
    margin: "0 auto 32px"
  },
  heroButtons: {
    display: "flex",
    justifyContent: "center",
    gap: 16,
    flexWrap: "wrap"
  },
  featuresSection: {
    padding: "64px 20px"
  },
  sectionHeader: {
    textAlign: "center",
    marginBottom: 48
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: "bold"
  },
  sectionSubtitle: {
    color: "#666",
    fontSize: 18
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 24
  },
  featureCard: {
    padding: 24,
    background: "white",
    borderRadius: 12,
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  },
  iconContainer: {
    width: 48,
    height: 48,
    background: "#e0e7ff",
    margin: "0 auto 16px",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 8
  },
  featureDescription: {
    color: "#666"
  }
};

export default Home;
