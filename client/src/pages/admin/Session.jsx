import React, { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';

const AddSessionForm = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: ''
  });
  // fretch data hook 
  const [data, setData]= useState([]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    console.log(form); 
  };
  //handleSubmit
  const handleSubmit = async (e)=>{
    //window.alert("Hello")
    try{
      if(editForm){
        const res = await axios.put(`http://localhost:5000/api/session/${id.id}`,form)
      if(res){
        alert('Session Updated Successfully')
      }
      
      }
      else{
        const res = await axios.post('http://localhost:5000/api/session',form)
      if(res){
        alert('Session Added Successfully')
      }
      }
    }
    catch(er){
      alert("Sorry try again later")
    }
  }
  //fetch data 
  const handlefetch  = async()=>{
    const res = await axios.get('http://localhost:5000/api/session')
    //console.log(res.data);
    setData(res.data.data);
  }
  useEffect(()=>{
    handlefetch();
  },[])
  //handle delete
  const handleDelete= async (id)=>{
    // console.log(id)
    const res = await axios.delete(`http://localhost:5000/api/session/${id}`);
    if(res){
      alert("Deleted successfully")
    }else{
      alert("Try again later")
    }
    handlefetch();
  }
  //handle edit
  const [editForm, setEditForm]= useState(null);
  const [id ,setId]= useState({
    id:'',
  })
  const handleEdit= async(item)=>{
    setForm({
      name:item.name,
      description:item.description,
      startDate: item.startDate.slice(0, 10),
      endDate: item.endDate.slice(0, 10)
    })
    setId({id:item._id});
    setEditForm(true);
    console.log(form);
  
    
  }

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', fontFamily: 'Arial' }}>
      <h2>➕ Add New Session</h2>
      <form style={{ marginBottom: '40px' }} onSubmit={handleSubmit}>
        <label>Session Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Ex-2025-26"
          style={styles.input}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Enter session description..."
          style={styles.textarea}
        />

        <div style={styles.dateContainer}>
          <div>
            <label>Start Date</label>
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div>
            <label>End Date</label>
            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
        </div>

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
      <h3>📋 Session List</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>S No.</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Description</th>
            <th style={styles.th}>Start Date</th>
            <th style={styles.th}>End Date</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i)=>(
            <tr key={item._id}>
                <td style={styles.td}>{i+1}</td>
                <td style={styles.td}>{item.name}</td>
                <td style={styles.td}>{item.description}</td>
                <td style={styles.td}>{new Date(item.startDate).toLocaleDateString('en-CA')}</td>
                <td style={styles.td}>{new Date(item.endDate).toLocaleDateString('en-CA')}</td>

                <td>
                  <button  style={{marginRight:'2px'}}className='btn btn-danger' onClick={()=>{
                    handleDelete(item._id) 
                  }}>Delete</button>
                  <button className='btn btn-success' onClick={()=>{
                    handleEdit(item)
                  }}>Edit</button>
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
  dateContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px'
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
  fontSize: '0.95rem',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  border: '1px solid #dee2e6',
  borderRadius: '8px',
  overflow: 'hidden'
},
th: {
  backgroundColor: '#343a40',
  color: '#fff',
  padding: '12px',
  textAlign: 'left',
  borderBottom: '1px solid #dee2e6'
},
td: {
  padding: '12px',
  borderBottom: '1px solid #dee2e6',
  backgroundColor: '#f9f9f9'
},
rowHover: {
  backgroundColor: '#f1f1f1'
},
  status: {
    padding: '4px 10px',
    borderRadius: '12px',
    fontSize: '0.85rem',
    textTransform: 'capitalize'
  },
  editBtn: {
    backgroundColor: '#17a2b8',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '5px 10px',
    marginRight: '5px',
    cursor: 'pointer'
  },
  activateBtn: {
    backgroundColor: '#ffc107',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '5px 10px',
    marginRight: '5px',
    cursor: 'pointer'
  },
  deleteBtn: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '5px 10px',
    cursor: 'pointer'
  }
};


export default AddSessionForm;
