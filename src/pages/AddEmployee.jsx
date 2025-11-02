import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddEmployee.module.css";

function AddEmployee({ onAddEmployee }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    salary: "",
    phone: "",
    email: "",
    animal: "",
    startDate: "",
    location: "",
    department: "",
    skills: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newEmployee = {
      id: Date.now(),
      ...formData,
      salary: Number(formData.salary),
      skills: formData.skills
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s),
    };

    onAddEmployee(newEmployee);
    navigate("/"); // go back to employee list
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add New Employee</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        {Object.keys(formData).map((key) => (
          <div key={key} className={styles.formGroup}>
            <label className={styles.label}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
            <input
              type={key === "startDate" ? "date" : "text"}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className={styles.input}
              required={key !== "skills"}
            />
          </div>
        ))}

        <button type="submit" className={styles.submitBtn}>
          Add Employee
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;
