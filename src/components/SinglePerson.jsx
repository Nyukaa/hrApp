import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import "../index.css";
import { useNavigate } from "react-router-dom";

const SinglePerson = () => {
  const { id } = useParams();
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
    const fetchPerson = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `http://localhost:3001/employees/${id}`
        );
        setPerson(response.data);
      } catch (err) {
        console.error("Error fetching person:", err);
        setError("Failed to fetch person");
      } finally {
        setLoading(false);
      }
    };

    fetchPerson();
  }, [id]);

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const updatedPerson = {
        ...person, // keep name, title, email, etc.
        ...formData, // replace only edited fields
      };

      const response = await axios.put(
        `http://localhost:3001/employees/${id}`,
        updatedPerson
      );

      setPerson(response.data);
      setIsEditing(false);
    } catch (err) {
      console.error("Error updating person:", err);
    }
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!person) return <div>No person found</div>;
  if (isEditing) {
    return (
      <div className="person-card">
        <h1>Edit Employee: {id}</h1>

        <form onSubmit={handleSave} className="edit-form">
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
              type="text    "
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

          <button type="submit">Save</button>
        </form>

        <button onClick={toggleEditing}>Cancel</button>
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

        {/* <dt>Years worked:</dt>
        <dd>{person.fullYearsWorked}</dd> */}
      </dl>

      <button onClick={toggleEditing}>Edit</button>
      <button onClick={() => navigate(`/`)}>Return to Home page</button>
    </div>
  );
};

export default SinglePerson;
