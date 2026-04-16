import React from "react";
const EmployeeList = ({ employees, setView }) => {
  return (
    <div>
        <h2>Employee List</h2>
        <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((emp) => (
                    <tr key={emp.id} style={{ backgroundColor: emp.salary > 80000 ? "lightgreen" : "white" }}>
                        <td>{emp.name}</td>
                        <td>{emp.department}</td>
                        <td>{emp.salary}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <button onClick={() => setView("add")}>Add Employee</button>
    </div>
  );
};

export default EmployeeList;