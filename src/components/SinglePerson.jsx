import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import "../index.css";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
const SinglePerson = () => {
  const { id } = useParams();
  const { get, put } = useAxios();

  // const API = "http://localhost:3001";

  const navigate = useNavigate();
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    salary: person?.salary || "",
    location: person?.location || "",
    department: person?.department || "",
    skills: person?.skills || "",
  });

  useEffect(() => {
    if (!person) return;

    setFormData({
      salary: person.salary ?? "",
      location: person.location ?? "",
      department: person.department ?? "",
      skills: Array.isArray(person.skills)
        ? person.skills.join(", ")
        : person.skills ?? "",
    });
  }, [person]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    get(`/employees/${id}`)
      .then((res) => setPerson(res.data))
      .catch(() => setError("Failed to fetch person"))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSave = async (e) => {
    e.preventDefault();

    const updatedPerson = {
      ...person,
      ...formData,
    };

    put(`/employees/${id}`, updatedPerson)
      .then((res) => {
        setPerson(res.data);
        setIsEditing(false);
      })
      .catch((err) => console.error("Error updating person:", err));
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!person) return <div>No person found</div>;
  if (isEditing) {
    return (
      <div className="person-card">
        <h1>Edit Employee: {person.name}</h1>
        <form onSubmit={handleSave}>
          <Grid container spacing={2}>
            <TextField
              fullWidth
              label="Salary"
              name="salary"
              type="number"
              value={formData.salary}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label="Department"
              name="department"
              value={formData.department}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label="Skills (comma separated)"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
            />

            <Button
              variant="contained"
              fullWidth
              type="submit"
              sx={{
                padding: "0.8rem",
                borderRadius: "8px",
                typography: "button",
              }}
            >
              Save
            </Button>
          </Grid>
        </form>

        {/* <form onSubmit={handleSave} className="edit-form">
          <label>
            Salary:
            <input
              name="salary"
              type="number"
              value={formData.salary}
              onChange={handleChange}
            />
          </label>

          <label>
            Location:
            <input
              name="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
            />
          </label>

          <label>
            Department:
            <input
              name="department"
              type="text"
              value={formData.department}
              onChange={handleChange}
            />
          </label>

          <label>
            Skills (comma separated):
            <input
              name="skills"
              type="text"
              value={formData.skills}
              onChange={handleChange}
            />
          </label>

          <Button variant="contained" type="submit" className="edit-btn">
            Save
          </Button>
        </form> */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0ea5e9",
            marginTop: 2,
            padding: "0.8rem 1.2rem",
            width: "80%",
            borderRadius: "8px",
            ":hover": { backgroundColor: "#38bdf8" },
            typography: "button", // <-- applies theme.typography.button
          }}
          onClick={toggleEditing}
        >
          Cancel
        </Button>
      </div>
    );
  }
  return (
    <div className="person-card">
      <h2>{person.name}</h2>

      <dl>
        <dt>Title:</dt>
        <dd>{person.title}</dd>

        <dt>Salary:</dt>
        <dd>${person.salary}</dd>

        <dt>Phone:</dt>
        <dd>{person.phone}</dd>

        <dt>Email:</dt>
        <dd>{person.email}</dd>

        <dt>Location: </dt>
        <dd>{person?.location}</dd>

        <dt>Department:</dt>
        <dd>{person.department}</dd>

        <dt>Skills:</dt>
        <dd>
          {Array.isArray(person.skills)
            ? person.skills.join(", ")
            : person.skills}
        </dd>
      </dl>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#38bdf8",
          padding: "0.8rem 1.2rem",
          width: "60%",
          borderRadius: "8px",
          ":hover": { backgroundColor: "#0ea5e9" },
          typography: "button", // <-- applies theme.typography.button
        }}
        onClick={toggleEditing}
      >
        Edit
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#0ea5e9",
          marginTop: 2,
          padding: "0.8rem 1.2rem",
          width: "60%",
          borderRadius: "8px",
          ":hover": { backgroundColor: "#38bdf8" },
          typography: "button", // <-- applies theme.typography.button
        }}
        onClick={() => navigate(`/`)}
      >
        Return to Home page
      </Button>
    </div>
  );
};

export default SinglePerson;
