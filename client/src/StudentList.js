import React, { useState } from 'react';
import './StudentList.css';

function StudentList({ studentList, attendanceData, handleAttendanceChange }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredStudentList = studentList.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="StudentList">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th style={{textAlign:"center"}}>Name</th>
            <th style={{textAlign:"center"}}>Roll Number</th>
            <th style={{textAlign:"center"}}>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {searchTerm === ''
            ? studentList.map((student) => (
                <tr key={student._id}>
                  <td>{student.name}</td>
                  <td>{student.rollNumber}</td>
                  <td>
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
                  </td>
                </tr>
              ))
            : filteredStudentList.map((student) => (
                <tr key={student._id}>
                  <td>{student.name}</td>
                  <td>{student.rollNumber}</td>
                  <td>
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
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
