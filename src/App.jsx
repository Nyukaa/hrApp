import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonList from "./components/PersonList";
import About from "./pages/About";
import AddEmployee from "./pages/AddEmployee";
import SinglePerson from "./components/SinglePerson";
import PersonsPage from "./pages/PersonsPage";
import Grid from "./components/Grid";
//import employeesData from "./data/employees";
import axios from "axios";
import useAxios from "./hooks/useAxios";

import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  // const API = "http://localhost:3001";
  const { get, post } = useAxios();

  useEffect(() => {
    get(`/employees`)
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error(err));
  }, []);

  function handleAddEmployee(newEmployee) {
    post(`/employees`, newEmployee)
      .then((res) => {
        setEmployees((prev) => [...prev, res.data]);
      })
      .catch((err) => console.error(err));
  }

  return (
    <Router>
      <div className="app">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<PersonList employees={employees} />} />
            <Route path="/about" element={<About />} />
            <Route path="/table" element={<PersonsPage />} />
            <Route
              path="/add"
              element={<AddEmployee onAddEmployee={handleAddEmployee} />}
            />
            <Route path="/grid" element={<Grid />} />
            <Route path="/employee/:id" element={<SinglePerson />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
