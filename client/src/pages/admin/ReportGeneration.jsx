import axios from 'axios';
import { useEffect, useState } from 'react';

const ReportTable = () => {
  const [data, setData] = useState([]);

  const handlefetch = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/exams/report');
      setData(res.data);
    } catch (er) {
      alert("Sorry fetching reports");
    }
  };

  useEffect(() => {
    handlefetch();
  }, []);

  const handlePrint = () => {
    // Future functionality
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3 style={styles.heading}>Report Generation</h3>

        {/* SCROLLABLE WRAPPER */}
        <div style={styles.scrollWrapper}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.headerRow}>
                <th style={styles.th}>Sn</th>
                <th style={styles.th}>Exam Name</th>
                <th style={styles.th}>Examinee</th>
                <th style={styles.th}>Examinee Email</th>
                <th style={styles.th}>Total Marks</th>
                <th style={styles.th}>Passing Marks</th>
                <th style={styles.th}>Score</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>DOE</th>
                <th style={styles.th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={item._id} style={styles.tr}>
                  <td style={styles.td}>{i + 1}</td>
                  <td style={styles.td}>{item.examTitle}</td>
                  <td style={styles.td}>{item.examineeName}</td>
                  <td style={styles.td}>{item.examineeEmail}</td>
                  <td style={styles.td}>{item.totalMarks}</td>
                  <td style={styles.td}>{item.passingMarks}</td>
                  <td style={styles.td}>{item.score}</td>
                  <td style={styles.td}>{item.status}</td>
                  <td style={styles.td}>{item.attemptedAt}</td>
                  <td style={styles.td}>
                    <button style={styles.editBtn} onClick={handlePrint}>Print</button>
                  </td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan="10" style={{ textAlign: 'center', padding: '12px', color: 'gray' }}>
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f2f2f2',
    maxWidth: '1000px', // important to constrain to viewport width
    overflowX: 'hidden',
  },
  card: {
    background: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    overflowX: 'auto',
  },
  heading: {
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
  },
  scrollWrapper: {
    overflowX: 'auto',
    width: '100%',
  },
  table: {
    width: '100%',
    minWidth: '1000px',
    borderCollapse: 'collapse',
  },
  headerRow: {
    backgroundColor: '#f0f0f0',
  },
  th: {
    border: '1px solid #ccc',
    padding: '10px',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
  },
  td: {
    border: '1px solid #ccc',
    padding: '10px',
    whiteSpace: 'nowrap',
  },
  tr: {
    transition: 'background-color 0.3s',
  },
  editBtn: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ReportTable;
