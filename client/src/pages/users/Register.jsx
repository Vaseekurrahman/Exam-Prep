import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from "./Logo.png";;

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    address: '',
    password: '',
    college: '',
    qualification: '',
    session: '',
  });

  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const handlefetch = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/session/");
        setSessions(res.data.data);
      } catch (er) {
        console.log(er);
      }
    };
    handlefetch();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/examinee', formData);
      alert('Examinee Registered!');
      setFormData({
        name: '',
        email: '',
        number: '',
        address: '',
        password: '',
        college: '',
        qualification: '',
        session: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to register');
    }
  };

  return (
    <div style={styles.wrapper}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.avatar}>
          <img src={logo} alt="Logo" style={styles.logo} />
        </div>
        <h2 style={styles.title}>REGISTER</h2>

        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label>Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div style={styles.inputGroup}>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label>Mobile Number</label>
            <input type="number" name="number" value={formData.number} onChange={handleChange} required />
          </div>
          <div style={styles.inputGroup}>
            <label>Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div style={styles.inputGroup}>
            <label>College</label>
            <input type="text" name="college" value={formData.college} onChange={handleChange} required />
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label>Qualification</label>
            <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} required />
          </div>
          <div style={styles.inputGroup}>
            <label>Session</label>
            <select name="session" value={formData.session} onChange={handleChange} required>
              <option value="">Select Session</option>
              {sessions.map((item) => (
                <option key={item._id} value={item._id}>{item.name}</option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit" style={styles.button}>REGISTER</button>
      </form>
    </div>
  );
};

const styles = {
  wrapper: {
    height: '100vh',
    backgroundColor: '#f0f2f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px'
  },
  form: {
    width: '100%',
    maxWidth: '700px',
    padding: '40px 30px',
    background: '#cfd8dc',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0px 0px 15px #aaa',
    position: 'relative'
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#b0bec5',
    margin: '0 auto',
    marginTop: '-60px',
    marginBottom: '20px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  title: {
    marginBottom: '20px',
    fontWeight: 'normal'
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    marginBottom: '15px'
  },
  inputGroup: {
    flex: 1,
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#00bcd4',
    border: 'none',
    color: 'white',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};

export default Register;
