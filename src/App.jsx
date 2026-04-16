import { useState, useEffect } from 'react'
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import './App.css'

function App() {
  const [employees, setEmployees] = useState([]);
  const [view, setView] = useState("list");

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching employee data:', error));
  }, []);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <div className="App">
      {view === "list" ? (
        <div>
          <EmployeeList employees={employees} />
          <button onClick={() => setView("form")}>Add Employee</button>
        </div> 
      ) : (
        <div>
          <AddEmployee addEmployee={addEmployee} />
          <button onClick={() => setView("list")}>Back to List</button>
        </div>
      )}
        
    </div>
  );
}

export default App
