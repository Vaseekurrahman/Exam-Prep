import React, { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';

const AddSubjectForm = () => {
  const [form, setForm] = useState({
    name: '',
    code: '',
    description: ''
  });
  //fetch data hook
  const[data, setData]=useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    console.log(form);
  };
//Handle Submmit
const handleSubmit = async (e)=>{
    //window.alert("Hello")
    try{
      const res = await axios.post('http://localhost:5000/api/subject',form)
      if(res){
        alert('Subject Added Successfully')
      }
    }
    catch(er){
      alert("Sorry try again later")
    }
  }
  //fetch data 
  const handlefetch  = async()=>{
    const res = await axios.get('http://localhost:5000/api/subject')
    //console.log(res.data);
    setData(res.data.data);
  }
  useEffect(()=>{
    handlefetch();
  },[])
  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', fontFamily: 'Arial' }}>
      <h2>➕ Add New Subject</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '40px' }}>
        <label>Subject Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="e.g. Computer Science"
          style={styles.input}
          required
        />

        <label>Subject Code</label>
        <input
          type="text"
          name="code"
          value={form.code}
          onChange={handleChange}
          placeholder="e.g. CS101"
          style={styles.input}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Enter subject description..."
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>Add Subject</button>
      </form>

      <h3>📋 Subject List</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>S No.</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Code</th>
            <th style={styles.th}>Description</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
            {data.map((item, i)=>(
            <tr key={item._id}>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.code}</td>
                <td>{item.description}</td>
                <td>
                  <button className='btn btn-danger' >Delete</button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  input: {
    width: '100%',
    padding: '8px',
    margin: '5px 0 15px 0',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  textarea: {
    width: '100%',
    padding: '8px',
    margin: '5px 0 15px 0',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    border: '1px solid #dee2e6',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    borderRadius: '8px',
    overflow: 'hidden'
  },
  th: {
    backgroundColor: '#343a40',
    color: '#fff',
    padding: '12px',
    borderBottom: '1px solid #dee2e6',
    textAlign: 'left'
  },
  td: {
    padding: '12px',
    borderBottom: '1px solid #dee2e6'
  },
  status: {
    padding: '4px 10px',
    borderRadius: '12px',
    fontSize: '0.85rem',
    textTransform: 'capitalize'
  }
};

export default AddSubjectForm;
