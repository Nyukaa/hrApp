import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonList from "./components/PersonList";
import About from "./pages/About";
import AddEmployee from "./pages/AddEmployee";
import SinglePerson from "./components/SinglePerson";
//import employeesData from "./data/employees";
import axios from "axios";
import useAxios from "./hooks/useAxios";

import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  // const API = "https://hrapp-ymdw.onrender.com";
  // const API = "http://localhost:3001";
  const { get, post } = useAxios();

  useEffect(() => {
    get(`/employees`)
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error(err));
  }, []);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/employees")
  //     .then((response) => {
  //       setEmployees(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching employee data:", error);
  //     });
  // }, []);

  // function handleAddEmployee(newEmployee) {
  //   axios
  //     .post("http://localhost:3001/employees", newEmployee)
  //     .then((response) => {
  //       setEmployees([...employees, response.data]);
  //     })
  //     .catch((error) => {
  //       console.error("Error adding person:", error);
  //     });
  //   setEmployees([...employees, newEmployee]);
  // }
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
            <Route
              path="/add"
              element={<AddEmployee onAddEmployee={handleAddEmployee} />}
            />
            <Route path="/employee/:id" element={<SinglePerson />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
