import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

const MyExamsTable = () => {
    const [exam, setExam]= useState([]);
    const fetchExams = async()=>{
        const res = await axios.get('http://localhost:5000/api/exams/exams');
        setExam(res.data);
    }
    useEffect(()=>{
        fetchExams();
    },[]);


  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3 style={styles.heading}>My Exams</h3>
        <table style={styles.table}>
          <thead>
            <tr style={styles.headerRow}>
              <th style={styles.th}>S.No</th>
              <th style={styles.th}>Exam Name</th>
              <th style={styles.th}>DOE</th>
              <th style={styles.th}>Time</th>
              {/* <th style={styles.th}>Total Marks</th>
              <th style={styles.th}>Obtained Marks</th> */}
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
 <tbody>
  {exam.map((item, i) => (
    <tr key={item._id} style={styles.tr}>
      <td style={styles.td}>{i + 1}</td>
      <td style={styles.td}>{item.title}</td>
      <td style={styles.td}>{new Date(item.date).toLocaleDateString()}</td>
      <td style={styles.td}>{item.status}</td>
      <td style={styles.td}>
        <Link to={`/users/getexam/${item._id}`} className="btn btn-primary">
          Start Exam
        </Link>
      </td>
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
    backgroundColor: '#f9f9f9',
  },
  card: {
    background: '#fff',
    padding: '30px',
    borderRadius: '12px',
    maxWidth: '95%',
    margin: '0 auto',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  heading: {
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  headerRow: {
    backgroundColor: '#f0f0f0',
  },
th: {
  border: '1px solid #ccc',
  padding: '10px',
  fontWeight: 'bold',
  textAlign: 'left',
  whiteSpace: 'nowrap',
},
td: {
  border: '1px solid #ccc',
  padding: '10px',
  textAlign: 'left',
  whiteSpace: 'nowrap',
},

  tr: {
    transition: 'background-color 0.3s',
  },
};

export default MyExamsTable;
