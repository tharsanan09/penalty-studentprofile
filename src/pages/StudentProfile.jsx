import React from 'react';
import { useParams } from 'react-router-dom';

const StudentProfile = ({ students }) => {
  const { id } = useParams();
  const student = students.find(s => s.id === parseInt(id));

  if (!student) return <p>Student not found.</p>;

  return (
    <div>
      <h3>Student Profile</h3>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Year:</strong> {student.year}</p>
    </div>
  );
};

export default StudentProfile;
