import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const email = localStorage.getItem('userEmail'); // from login
        const res = await axios.get(`http://localhost:5000/api/examinee/user/${email}`);
        setUser(res.data.user); // adjust based on API response
      } catch (err) {
        console.error("Failed to fetch user profile", err);
      }
    };

    fetchUser();
  }, []);

  if (!user) return <div style={styles.mainContent}>Loading profile...</div>;

  return (
    <div style={styles.mainContent}>
      <h1 style={styles.heading}>👤 My Profile</h1>

      <div style={styles.profileCard}>
        <div style={styles.profileRow}>
          <label style={styles.label}>Full Name</label>
          <div>{user.name}</div>
        </div>
        <div style={styles.profileRow}>
          <label style={styles.label}>Email</label>
          <div>{user.email}</div>
        </div>
        <div style={styles.profileRow}>
          <label style={styles.label}>Phone Number</label>
          <div>{user.number}</div>
        </div>
        <div style={styles.profileRow}>
          <label style={styles.label}>Address</label>
          <div>{user.address}</div>
        </div>
        <div style={styles.profileRow}>
          <label style={styles.label}>Qualification</label>
          <div>{user.qualification}</div>
        </div>
        <div style={styles.profileRow}>
          <label style={styles.label}>Session</label>
          <div>{user.session || 'N/A'}</div>
        </div>

        <button style={styles.editBtn}>✏️ Edit Profile</button>
      </div>
    </div>
  );
};

const styles = {
  mainContent: {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f6fa',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
  },
  heading: {
    fontSize: '28px',
    marginBottom: '30px',
    color: '#2c3e50',
    borderBottom: '2px solid #dcdde1',
    paddingBottom: '10px'
  },
  profileCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)'
  },
  profileRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
    paddingBottom: '10px',
    borderBottom: '1px solid #f1f2f6'
  },
  label: {
    fontWeight: 'bold',
    color: '#34495e'
  },
  editBtn: {
    marginTop: '25px',
    padding: '10px 20px',
    backgroundColor: '#0984e3',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '15px'
  }
};

export default UserProfile;
