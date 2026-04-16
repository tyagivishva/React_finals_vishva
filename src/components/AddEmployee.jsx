import React from "react";
44
const AddEmployee = ({ addEmployee, setView }) => {
  const [name, setName] = React.useState("");
  const [department, setDepartment] = React.useState("HR");
  const [salary, setSalary] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && salary && department> 0){
        const newId = Date.now(); // Generate a unique ID based on the current timestamp
        addEmployee({ id: newId, name, department, salary: parseFloat(salary) });
        setView("list");
    }
    addEmployee(newEmployee);
    setView("list");
    // Reset form fields
    setName("");
    setDepartment("HR");
    setSalary("");
  };
  
  return (
    <div>
        <h2>Add Employee</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Department:</label>
                <select value={department} onChange={(e) => setDepartment(e.target.value)}>
                    <option value="HR">HR</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                </select>
            </div>
            <div>
                <label>Salary:</label>
                <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} required min="0" />
            </div>
            <button type="submit">Add Employee</button>
        </form>
    </div>
  );
};

export default AddEmployee;
     