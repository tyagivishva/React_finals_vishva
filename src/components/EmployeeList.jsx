// 1- Fetch Employees: Use useEffect and fetch () to load employees and store them in state.
// 2- Display Employees (Table): Display employees in a table with columns: Name, Department,
// Salary.
// 3- Add Employee (Form)
// Allow users to input Name, Department(3 or 4 drop down list ), and Salary (>0). Generate ID
// automatically. On submit, add employees and return to list.
// 4- Conditional Rendering: Use a state variable to switch between list view and form view.
// 5- Conditional Styling
// Highlight employees with salary > 80,000 (e.g., green background).
// 6- Navigation
// Provide buttons to switch between views (Add Employee / Back to List).
// 7- Technical Requirements
// • useState for managing employee list, form inputs, and view state
// • useEffect for fetching data
// • map() for rendering rows
// • Event handlers for form submission
// • Conditional rendering and styling
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