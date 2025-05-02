import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import StudentList from './pages/StudentList';
import StudentProfile from './pages/StudentProfile';
import AddStudent from './pages/AddStudent';
import './App.css';


const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Tharsan', course: 'Math', year: '2022' },
    { id: 2, name: 'Tites', course: 'Physics', year: '2023' },
    { id: 3, name: 'Dilan', course: 'Biology', year: '2024' },
  ]);

  const addStudent = (newStudent) => {
    const updatedList = [...students, { ...newStudent, id: students.length + 1 }];
    setStudents(updatedList);
  };

  return (
    <Router>
      <div className="container mt-4">
        <nav className="mb-4">
          <Link to="/" className="me-3">Home</Link>
          <Link to="/students" className="me-3">Students</Link>
          <Link to="/add-student">Add Student</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentList students={students} />} />
          <Route path="/student/:id" element={<StudentProfile students={students} />} />
          <Route path="/add-student" element={<AddStudent addStudent={addStudent} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
