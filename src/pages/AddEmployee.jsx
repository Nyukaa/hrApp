import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import styles from "./AddEmployee.module.css";
import usePerson from "../hooks/usePerson";

function AddEmployee({ onAddEmployee }) {
  const { addPerson } = usePerson();
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

  async function handleSubmit(e) {
    e.preventDefault();

    const newEmployee = {
      id: Date.now().toString(),
      ...formData,
      salary: Number(formData.salary),
      skills: formData.skills
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s)
        .join(", "),
    };

    // onAddEmployee(newEmployee);
    await addPerson(newEmployee);
    navigate("/");
  }

  return (
    <Paper elevation={3} className={styles.container}>
      <Typography variant="h4" className={styles.title}>
        Add New Employee
      </Typography>

      <Box component="form" onSubmit={handleSubmit} className={styles.form}>
        {Object.keys(formData).map((key) => (
          <div key={key} className={styles.formGroup}>
            <label className={styles.label}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>

            <TextField
              variant="outlined"
              name={key}
              type={key === "startDate" ? "date" : "text"}
              value={formData[key]}
              onChange={handleChange}
              required={key !== "skills"}
              className={styles.input}
              fullWidth
              InputLabelProps={key === "startDate" ? { shrink: true } : {}}
            />
          </div>
        ))}

        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "#38bdf8",
            padding: "0.8rem 1.2rem",
            borderRadius: "8px",
            ":hover": { backgroundColor: "#0ea5e9" },
            typography: "button", // <-- applies theme.typography.button
          }}
        >
          Add Employee
        </Button>
      </Box>
    </Paper>
  );
}

export default AddEmployee;
