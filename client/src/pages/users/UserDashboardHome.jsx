import React from 'react'

const UserDashboardHome = () => {
    const cardStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  fontSize: '1rem',
  color: '#333'
};
const thStyle = {
  padding: '12px',
  textAlign: 'left',
  borderBottom: '1px solid #ccc'
};
const tdStyle = {
  padding: '12px',
  borderBottom: '1px solid #eee',
  color: '#333'
};
  return (
    <div>
      
        <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={cardStyle}>📄 <strong>Upcoming Exam:</strong> Math Final - Aug 10</div>
          <div style={cardStyle}>📊 <strong>Last Result:</strong> Physics - 87%</div>
          <div style={cardStyle}>⏰ <strong>Scheduled:</strong> Chemistry - Aug 15</div>
          <div style={cardStyle}>🎓 <strong>Qualification:</strong> B.Sc. Computer Science</div>
        </div>

        <h2 style={{ marginTop: '40px', color: '#343a40' }}>📋 My Results</h2>
        <table style={{
          width: '100%',
          marginTop: '15px',
          borderCollapse: 'collapse',
          backgroundColor: '#fff',
          border: '1px solid #ccc'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#6f42c1', color: '#fff' }}>
              <th style={thStyle}>S. No</th>
              <th style={thStyle}>Exam</th>
              <th style={thStyle}>Marks</th>
              <th style={thStyle}>Total</th>
              <th style={thStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>1</td>
              <td style={tdStyle}>Physics</td>
              <td style={tdStyle}>87</td>
              <td style={tdStyle}>100</td>
              <td style={tdStyle}>Pass</td>
            </tr>
            <tr>
              <td style={tdStyle}>2</td>
              <td style={tdStyle}>Chemistry</td>
              <td style={tdStyle}>76</td>
              <td style={tdStyle}>100</td>
              <td style={tdStyle}>Pass</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default UserDashboardHome
