import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Examinee = () => {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        address: '',
        college: '',
        qualification: ''
    });

    const [editForm, setEditForm] = useState(false);
    const [id, setId] = useState('');

    const handleFetch = async () => {
        const res = await axios.get('http://localhost:5000/api/examinee');
        setData(res.data.data);
    };

    useEffect(() => {
        handleFetch();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleDelete = async (id) => {
        const res = await axios.delete(`http://localhost:5000/api/examinee/${id}`);
        if (res) {
            alert("Deleted Successfully");
            handleFetch();
        } else {
            alert("Try again later");
        }
    };

    const handleEdit = (item) => {
        setFormData({
            name: item.name,
            email: item.email,
            number: item.number,
            address: item.address,
            college: item.college,
            qualification: item.qualification
        });
        setId(item._id);
        setEditForm(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:5000/api/examinee/${id}`, formData);
            if (res) {
                alert("Updated Successfully");
                setEditForm(false);
                setFormData({
                    name: '',
                    email: '',
                    number: '',
                    address: '',
                    college: '',
                    qualification: ''
                });
                handleFetch();
            }
        } catch (err) {
            alert("Error occurred. Try again.");
        }
    };

    return (
        <div className="container my-4">
            <div className="bg-light text-dark shadow border rounded p-4">

                <h1 className='text-center text-primary mb-4'>
                    <i className="fa-solid fa-user-graduate me-2"></i>Examinee Info
                </h1>

                {editForm && (
                    <div className="mb-5 p-4 border border-primary rounded bg-white">
                        <h3 className='text-primary mb-4'>
                            <i className="fa-solid fa-user-pen me-2"></i>Edit Examinee Info
                        </h3>
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="input-group">
                                        <span className="input-group-text bg-primary text-white"><i className="fa fa-user"></i></span>
                                        <input type="text" name="name" className="form-control" placeholder="Name" value={formData.name} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <span className="input-group-text bg-primary text-white"><i className="fa fa-envelope"></i></span>
                                        <input type="email" name="email" className="form-control" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="input-group">
                                        <span className="input-group-text bg-primary text-white"><i className="fa fa-phone"></i></span>
                                        <input type="text" name="number" className="form-control" placeholder="Phone Number" value={formData.number} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <span className="input-group-text bg-primary text-white"><i className="fa fa-location-dot"></i></span>
                                        <input type="text" name="address" className="form-control" placeholder="Address" value={formData.address} onChange={handleChange} required />
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="input-group">
                                        <span className="input-group-text bg-primary text-white"><i className="fa fa-building-columns"></i></span>
                                        <input type="text" name="college" className="form-control" placeholder="College" value={formData.college} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <span className="input-group-text bg-primary text-white"><i className="fa fa-graduation-cap"></i></span>
                                        <input type="text" name="qualification" className="form-control" placeholder="Qualification" value={formData.qualification} onChange={handleChange} required />
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-success mt-2">Update</button>
                        </form>
                    </div>
                )}

                <table className="table table-bordered table-hover">
                    <thead className='table-primary'>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>College</th>
                            <th>Qualification</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, i) => (
                            <tr key={item._id}>
                                <td>{i + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.number}</td>
                                <td>{item.address}</td>
                                <td>{item.college}</td>
                                <td>{item.qualification}</td>
                                <td>
                                    <button className="btn btn-sm btn-danger me-1" onClick={() => handleDelete(item._id)}>
                                        Delete
                                    </button>
                                    <button className="btn btn-sm btn-primary mt-2px" onClick={() => handleEdit(item)}>
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Examinee;
