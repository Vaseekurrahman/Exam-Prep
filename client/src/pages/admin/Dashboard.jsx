import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router';

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const role = localStorage.getItem('role');
  if (role !== "admin") {
    window.location.href = '/adlogin';
    return null;
  }

  const location = useLocation();
  const isDashboardHome = location.pathname === '/admin';

  const navItems = [
    { path: "/admin/session", label: "Session", icon: "fa-calendar-days" },
    { path: "/admin/subject", label: "Subject", icon: "fa-book" },
    { path: "/admin/examinee", label: "Examinee", icon: "fa-user" },
    { path: "/admin/questionbank", label: "Questionbank", icon: "fa-folder" },
    { path: "/admin/examination", label: "Examination", icon: "fa-pen" },
    { path: "/admin/reportgeneration", label: "Report Generation", icon: "fa-file-lines" },
    { path: "/admin/resultdeclaration", label: "Result Declaration", icon: "fa-bullhorn" },
    { path: "/admin/changepass", label: "Change Password", icon: "fa-key" },
    { path: "/admin/message", label: "Message", icon: "fa-envelope" },
  ];

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/adlogin';
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good Morning Admin";
    else if (hour >= 12 && hour < 17) return "Good Afternoon Admin";
    else if (hour >= 17 && hour < 21) return "Good Evening Admin";
    else return "Good Night Admin";
  };

  const styles = {
    dashboardContainer: {
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
    dashboardTitle: {
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
    summaryBoxWrapper: {
      display: 'flex',
      gap: '20px',
      marginBottom: '30px',
      flexWrap: 'wrap',
    },
    summaryBox: {
      flex: '1',
      minWidth: '200px',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '12px',
      textAlign: 'center',
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '10px',
    },
    recentExamTable: {
      width: '100%',
      borderCollapse: 'collapse',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    tableHead: {
      backgroundColor: '#9333ea',
      color: '#fff',
    },
    tableCell: {
      padding: '10px',
      border: '1px solid #e5e7eb',
      textAlign: 'left',
    },
    submitButton: {
      background: 'linear-gradient(to right, #1e3a8a, #9333ea)',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: 'bold',
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
    <div style={styles.dashboardContainer}>
      <div style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <h4 style={styles.sidebarTitle}>{!collapsed && 'Admin'}</h4>
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
            <h2 style={styles.dashboardTitle}>{getGreeting()}</h2>
          </div>
        </div>

        <div style={styles.content}>
          <div style={styles.formCard}>
            {isDashboardHome && (
              <>
                <div style={styles.summaryBoxWrapper}>
                  <div style={styles.summaryBox}>
                    <h4>Total Exam</h4>
                    <p>--</p>
                  </div>
                  <div style={styles.summaryBox}>
                    <h4>Total Examinee</h4>
                    <p>--</p>
                  </div>
                  <div style={styles.summaryBox}>
                    <h4>Total Subject</h4>
                    <p>--</p>
                  </div>
                </div>

                <h3 style={styles.sectionTitle}>Recent Exam</h3>
                <table style={styles.recentExamTable}>
                  <thead style={styles.tableHead}>
                    <tr>
                      <th style={styles.tableCell}>Exam Name</th>
                      <th style={styles.tableCell}>Date</th>
                      <th style={styles.tableCell}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={styles.tableCell}>--</td>
                      <td style={styles.tableCell}>--</td>
                      <td style={styles.tableCell}>--</td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}

            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
