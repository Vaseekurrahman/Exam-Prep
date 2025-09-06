import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Msg= () => {
  const [formData, setFormData] = useState({
    question: '',
    email: localStorage.getItem('userEmail') || '',
  });

  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/', formData);
      alert(response.data.message);
      setFormData({ question: '', email: formData.email });
      fetchMessages();
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message');
    }
  };

  const fetchMessages = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await axios.get(`http://localhost:5000/api/message/${userId}`);
      setMessages(response.data.message);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3 style={styles.heading}>Contact Us</h3>
        <form method="post" onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Message</label>
            <textarea
              name="question"
              value={formData.question}
              onChange={handleChange}
              required
              rows="4"
              style={{ ...styles.input, resize: 'none' }}
            ></textarea>
          </div>

          <button type="submit" value="Send" style={styles.submitBtn}>
            Send Message
          </button>
        </form>
      </div>

      {/* Messages Table */}
      <div style={styles.tableCard}>
        <h3 style={styles.tableHeading}>Your Previous Messages</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>SN</th>
              <th style={styles.th}>Question</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Reply</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message, index) => (
              <tr key={message._id}>
                <td style={styles.td}>{index + 1}</td>
                <td style={styles.td}>{message.question}</td>
                <td style={styles.td}>{new Date(message.createdAt).toLocaleDateString()}</td>
                <td style={styles.td}>{message.reply || 'No reply yet'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
  },
  card: {
    background: '#fff',
    padding: '30px',
    borderRadius: '12px',
    maxWidth: '600px',
    margin: '0 auto 40px auto',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  heading: {
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '6px',
  },
  submitBtn: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  tableCard: {
    background: '#fff',
    padding: '20px',
    borderRadius: '12px',
    maxWidth: '900px',
    margin: '0 auto',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  tableHeading: {
    marginBottom: '15px',
    textAlign: 'center',
    color: '#333',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '10px',
    border: '1px solid #ccc',
    textAlign: 'left',
  },
  td: {
    padding: '10px',
    border: '1px solid #ccc',
    color: '#333',
    backgroundColor: '#f9fafb',
  },
};

export default Msg;
