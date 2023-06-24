import React from 'react';
//import './Student.css';

const Student = ({ student, attendanceData, handleAttendanceChange }) => {
  return (
    <div className="Student" key={student._id}>
      <h2>{student.name}</h2>
      <p>Roll Number: {student.rollNumber}</p>
      <div className="attendance-container">
        <label>
          <input
            type="radio"
            name={`attendance-${student._id}`}
            value="present"
            checked={attendanceData[student._id] === 'present'}
            onChange={() => handleAttendanceChange(student._id, 'present')}
          />
          Present
        </label>
        <label>
          <input
            type="radio"
            name={`attendance-${student._id}`}
            value="absent"
            checked={attendanceData[student._id] === 'absent'}
            onChange={() => handleAttendanceChange(student._id, 'absent')}
          />
          Absent
        </label>
      </div>
    </div>
  );
};

export default Student;
