import React from 'react';
import { Link } from 'react-router-dom';

const StudentList = ({ students }) => (
  <div>
    <h3>Student List</h3>
    <ul>
      {students.map(student => (
        <li key={student.id}>
          <Link to={`/student/${student.id}`}>{student.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default StudentList;
