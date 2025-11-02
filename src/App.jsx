import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonList from "./components/PersonList";
import About from "./pages/About";
import AddEmployee from "./pages/AddEmployee";
import employeesData from "./data/employees";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState(employeesData);
  function handleAddEmployee(newEmployee) {
    setEmployees([...employees, newEmployee]);
  }

  return (
    <Router>
      <div className="app">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<PersonList employees={employees} />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/add"
              element={<AddEmployee onAddEmployee={handleAddEmployee} />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
