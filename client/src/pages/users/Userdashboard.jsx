import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import axios from 'axios';

const UserDashboard = () => {
  const [name, setName] = useState('');
  const [collapsed, setCollapsed] = useState(false);

  const role = localStorage.getItem('userRole');
  const email = role === "user" ? localStorage.getItem('userEmail') : null;

  const location = useLocation();

  useEffect(() => {
    if (role !== "user") {
      window.location.href = '/';
    } else {
      const fetchUserData = async () => {
        try {
          const res = await axios.post('http://localhost:5000/api/examinee/getuser', { email });
          if (res.data && res.data.name) {
            setName(res.data.name);
          }
        } catch (err) {
          console.error("Error fetching user:", err);
        }
      };

      fetchUserData();
    }
  }, [email, role]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good Morning";
    else if (hour >= 12 && hour < 18) return "Good Afternoon";
    else if (hour >= 18 && hour < 21) return "Good Evening";
    else return "Good Night";
  };

  const greeting = getGreeting();

  const navItems = [
    // { path: "#", label: "Welcome", icon: "fa-house" },
    { path: "/users/profile", label: "Profile", icon: "fa-user" },
    { path: "/users/myexams", label: "My Exams", icon: "fa-pen" },
    // { path: "#", label: "Scheduled Exams", icon: "fa-clock" },
    { path: "/users/result", label: "Result", icon: "fa-chart-line" },
    { path: "/users/changepassword", label: "Change Password", icon: "fa-key" },
    { path: "/users/message", label: "Contact Us", icon: "fa-envelope" },
  ];

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    window.location.href = '/users';
  };

  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      overflow: 'hidden',
      background: 'linear-gradient(to top right, #dbeafe, #e0e7ff, #fae8ff)',
    },
    sidebar: {
      backgroundColor: '#1e3a8a',
      color: '#fff',
      paddingTop: '20px',
      transition: 'width 0.3s ease',
      width: collapsed ? '70px' : '250px',
      position: 'fixed',
      height: '100vh',
      overflowY: 'auto',
    },
    sidebarHeader: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    sidebarTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#fff',
    },
    navLinks: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    navItem: {
      marginBottom: '10px',
    },
    buttonLink: {
      backgroundColor: '#3b82f6',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: '14px',
      width: '90%',
      margin: '0 auto',
      gap: '10px',
      transition: 'background-color 0.2s ease',
    },
    icon: {
      fontSize: '16px',
      minWidth: '20px',
      textAlign: 'center',
    },
    label: {
      whiteSpace: 'nowrap',
    },
    main: {
      flex: 1,
      marginLeft: collapsed ? '70px' : '250px',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      transition: 'margin-left 0.3s ease',
    },
    topbar: {
      borderRadius: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '15px 30px',
      backgroundColor: '#ffffff',
      height: '60px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    topbarLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    toggleBtn: {
      backgroundColor: '#f3f4f6',
      border: 'none',
      padding: '8px 12px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    greetingText: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#1f2937',
      margin: 0,
    },
    content: {
      flexGrow: 1,
      padding: '20px',
      backgroundColor: '#f9f9f9',
      overflowY: 'auto',
    },
    formCard: {
      background: '#fff',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
      marginBottom: '30px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <h4 style={styles.sidebarTitle}>{!collapsed && 'User'}</h4>
        </div>
        <ul style={styles.navLinks}>
          {navItems.map((item, index) => (
            <li key={index} style={styles.navItem}>
              <Link to={item.path} style={styles.buttonLink}>
                <i className={`fa-solid ${item.icon}`} style={styles.icon}></i>
                {!collapsed && <span style={styles.label}>{item.label}</span>}
              </Link>
            </li>
          ))}
          <li style={styles.navItem}>
            <Link to="#" onClick={handleLogout} style={styles.buttonLink}>
              <i className="fa-solid fa-right-from-bracket" style={styles.icon}></i>
              {!collapsed && <span style={styles.label}>Log out</span>}
            </Link>
          </li>
        </ul>
      </div>

      <div style={styles.main}>
        <div style={styles.topbar}>
          <div style={styles.topbarLeft}>
            <button onClick={() => setCollapsed(!collapsed)} style={styles.toggleBtn}>
              <i className="fa-solid fa-bars"></i>
            </button>
            <h2 style={styles.greetingText}>👋 {greeting}, {name || "User"}!</h2>
          </div>
        </div>

        <div style={styles.content}>
          <div style={styles.formCard}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
