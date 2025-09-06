import React, { useState, useEffect } from "react";
import axios from "axios";

const QuestionForm = () => {
  const [formData, setFormData] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correct: "",
    subject:"",
  });

  const [questions, setQuestions] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [subjects, setSubjects]=useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await axios.get("http://localhost:5000/api/question");
      setQuestions(res.data.data);
      const res1 = await axios.get("http://localhost:5000/api/subject");
      setSubjects(res1.data.data);
    };
    fetchQuestions();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        const res = await axios.put(`http://localhost:5000/api/question/${editingId}`, formData);
        if (res.data.success) {
          setQuestions((prev) =>
            prev.map((q) => (q._id === editingId ? { ...formData, _id: editingId } : q))
          );
          alert("Question Updated Successfully");
        }
      } else {
        const res = await axios.post("http://localhost:5000/api/question", formData);
        if (res.data && res.data.data) {
          setQuestions((prev) => [...prev, res.data.data]);
          alert("Question Added Successfully");
          
        }
      }
    } catch (err) {
      console.error(err);
      alert("Sorry, Try Again");
    }

    setFormData({
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      correct: "",
      subject:"",
    });
    setEditingId(null);
  };

  const handleEdit = (question) => {
    setFormData({
      question: question.question,
      option1: question.option1,
      option2: question.option2,
      option3: question.option3,
      option4: question.option4,
      correct: question.correct,
    });
    setEditingId(question._id);
  };

  const handleDelete = async (question) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this question?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/question/${question._id}`);
      setQuestions((prev) => prev.filter((q) => q._id !== question._id));
      alert("Question deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to delete. Try again.");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          style={styles.inputFull}
          type="text"
          name="question"
          value={formData.question}
          onChange={handleChange}
          placeholder="Enter question here"
          required
        />
        <div style={styles.row}>
          <input
            style={styles.inputHalf}
            type="text"
            name="option1"
            value={formData.option1}
            onChange={handleChange}
            placeholder="Option 1"
            required
          />
          <input
            style={styles.inputHalf}
            type="text"
            name="option2"
            value={formData.option2}
            onChange={handleChange}
            placeholder="Option 2"
            required
          />
        </div>
        <div style={styles.row}>
          <input
            style={styles.inputHalf}
            type="text"
            name="option3"
            value={formData.option3}
            onChange={handleChange}
            placeholder="Option 3"
            required
          />
          <input
            style={styles.inputHalf}
            type="text"
            name="option4"
            value={formData.option4}
            onChange={handleChange}
            placeholder="Option 4"
            required
          />
        </div>
        <div style={styles.row}>
          <input
            style={styles.inputHalf}
            type="text"
            name="correct"
            value={formData.correct}
            onChange={handleChange}
            placeholder="Correct Option"
            required
          />
          <select  name="subject" value={formData.subject} onChange={handleChange}  style={styles.inputHalf}  required>
            <option value="">Select Subject</option>
            {subjects.map((sub)=>(
              <option key={sub._id} value={sub._id}>
                {sub.name}
              </option>
          ))}
          </select>
          </div>
          <div style={{textAlign:"center"}}>
          <button  type="submit" style={styles.button1}>
            {editingId ? "Update" : "Submit"}
          </button>
        </div>
      </form>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>S.no</th>
            <th style={styles.th}>Question</th>
            <th style={styles.th}>Options</th>
            <th style={styles.th}>Correct</th>
            <th style={styles.th}>Subject</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((q, index) => (
            <tr key={q._id}>
              <td style={styles.td}>{index + 1}</td>
              <td style={styles.td}>{q.question}</td>
              <td style={styles.td}>{q.option1}, {q.option2}, {q.option3}, {q.option4}</td>
              <td style={styles.td}>{q.correct}</td>
              <td style={styles.td}>{q.subject?.name}</td>
              <td style={styles.td}>
                <button style={{ ...styles.button, background: '#007cf0',display:'flex', gap:'8px',alignItems:'center' }} onClick={() => handleEdit(q)}>Edit</button>
                <button style={{ ...styles.button, background: '#e63946',display:'flex', gap:'8px',alignItems:'center',marginTop:'2px' }} onClick={() => handleDelete(q)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    // background: 'linear-gradient(to right, #7928ca, #ff0080)',
    minHeight: '100vh',
    padding: '40px',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    background: '#fff',
    padding: '30px',
    borderRadius: '12px',
    maxWidth: '600px',
    margin: '0 auto 40px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  inputFull: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  inputHalf: {
    width: '48%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '4%',
  },
  button1: {
    
    width: '48%',
    padding: '10px',
    background: 'linear-gradient(to right, #007cf0, #7928ca)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '14px',
    cursor: 'pointer',
  },
  table: {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    background: '#fff',
    borderCollapse: 'collapse',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  th: {
    backgroundColor: '#7928ca',
    color: '#fff',
    padding: '10px',
    textAlign: 'left',
  },
td: {
  padding: '10px',
  borderBottom: '1px solid #ccc',
  borderRight: '1px solid #eee', // add right border
  verticalAlign: 'middle',
},

  button: {
    padding: '6px 12px',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    fontSize: '13px',
    cursor: 'pointer',
  },
};

export default QuestionForm;
