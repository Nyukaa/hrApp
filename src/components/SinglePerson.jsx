import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import "../index.css";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
// import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Box, Paper, Typography, Divider, Stack, Button } from "@mui/material";
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
    <div>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 500,
          mx: "auto",
          borderRadius: 3,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h4" fontWeight={700} gutterBottom>
          {person.name}
        </Typography>

        <Stack spacing={1.2} sx={{ mt: 2 }}>
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Title
            </Typography>
            <Typography variant="body1">{person.title}</Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Salary
            </Typography>
            <Typography variant="body1">${person.salary}</Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Phone
            </Typography>
            <Typography variant="body1">{person.phone}</Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Email
            </Typography>
            <Typography variant="body1">{person.email}</Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Location
            </Typography>
            <Typography variant="body1">{person.location}</Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Department
            </Typography>
            <Typography variant="body1">{person.department}</Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Skills
            </Typography>
            <Typography variant="body1">
              {Array.isArray(person.skills)
                ? person.skills.join(", ")
                : person.skills}
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Stack spacing={2}>
          <Button
            variant="contained"
            sx={{
              py: 1.4,
              borderRadius: 2,
              backgroundColor: "#38bdf8",
              ":hover": { backgroundColor: "#0ea5e9" },
            }}
            onClick={toggleEditing}
          >
            Edit
          </Button>

          <Button
            variant="contained"
            sx={{
              py: 1.4,
              borderRadius: 2,
              backgroundColor: "#0ea5e9",
              ":hover": { backgroundColor: "#38bdf8" },
            }}
            onClick={() => navigate("/")}
          >
            Return to Home Page
          </Button>
        </Stack>
      </Paper>
    </div>
  );
};

export default SinglePerson;
