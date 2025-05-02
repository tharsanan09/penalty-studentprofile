import React, { useState } from 'react';

const AddStudent = ({ addStudent }) => {
  const [formData, setFormData] = useState({ name: '', course: '', year: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);
    setFormData({ name: '', course: '', year: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      <h3>Add New Student</h3>
      {submitted && <div className="alert alert-success">Student added successfully!</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="form-label">Name</label>
          <input className="form-control" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-2">
          <label className="form-label">Course</label>
          <input className="form-control" name="course" value={formData.course} onChange={handleChange} required />
        </div>
        <div className="mb-2">
          <label className="form-label">Year</label>
          <input className="form-control" name="year" value={formData.year} onChange={handleChange} required />
        </div>
        <button className="btn btn-primary">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
