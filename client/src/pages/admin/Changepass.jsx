import { useState } from 'react';
import axios from 'axios';

const ChangePass = () => {
    const email= localStorage.getItem('email');
    const [data, formData] = useState({
        op:'',
        np:'',
        cnp:'',
    })
    const handleChange=(e)=>{
        const {name , value}=e.target
        formData((prev)=>(
            {...prev,[name]:value}
        ));
    }
    const handleSubmit = async(e)=>{
      e.preventDefault();
        try{
            const res = await axios.put(`http://localhost:5000/api/admin/change/${email}`, data);
            if(res){
                alert("res.data.message");
                if(res.data.message ==="Password Changed Successfully"){
                  localStorage.removeItem('email')
                  localStorage.removeItem('role')
                  window.location.href='/adlogin';
                }
            }
            console.log(res);
            
        }
        catch(er){
            alert("Sorry Try Again Later")
            // console.log(er);
            
        }
    }
//   const [formData, setFormData] = useState({
//     currentPassword: '',
//     newPassword: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.newPassword !== formData.confirmPassword) {
//       alert('New passwords do not match!');
//       return;
//     }
//     // Proceed with password change logic
//     alert('Password changed successfully!');
//   };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3 style={styles.heading}>Change Password</h3>
        <form onSubmit={handleSubmit} method='post'>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Current Password</label>
            <input
              type="password"
              name="op"
            //   value={formData.currentPassword}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>New Password</label>
            <input
              type="password"
              name="np"
            //   value={formData.newPassword}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Confirm New Password</label>
            <input
              type="password"
              name="cnp"
            //   value={formData.confirmPassword}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.submitBtn}>Update Password</button>
        </form>
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
    maxWidth: '500px',
    margin: '0 auto',
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
};

export default ChangePass;
