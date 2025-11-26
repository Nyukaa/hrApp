import { useNavigate } from "react-router-dom";
function PersonCard({
  id,
  name,
  title,
  salary,
  phone,
  email,
  animal,
  location,
  startDate,
  department,
  skills,
}) {
  const start = new Date(startDate);
  const today = new Date();
  const navigate = useNavigate();
  const yearsWorked = today.getFullYear() - start.getFullYear();

  const hasHadAnniversary =
    today.getMonth() > start.getMonth() ||
    (today.getMonth() === start.getMonth() &&
      today.getDate() >= start.getDate());
  //full years
  const fullYearsWorked = hasHadAnniversary ? yearsWorked : yearsWorked - 1;
  //full months
  const monthsWorked =
    (today.getFullYear() - start.getFullYear()) * 12 +
    (today.getMonth() - start.getMonth());

  let reminder = "";
  if (yearsWorked > 0 && yearsWorked % 5 === 0) {
    reminder = "🎉 Schedule recognition meeting.";
  } else if (monthsWorked < 6) {
    reminder = "🔔 Schedule probation review.";
  }
  function getAnimalEmoji(animal) {
    const map = {
      dog: "🐶",
      cat: "🐱",
      owl: "🦉",
      fox: "🦊",
      lion: "🦁",
      panda: "🐼",
      dolphin: "🐬",
      bear: "🐻",
      rabbit: "🐰",
      wolf: "🐺",
    };
    return map[animal.toLowerCase()] || "🐾";
  }
  return (
    <div className="person-card">
      <h2>{name}</h2>

      <dl>
        <dt>Title:</dt>
        <dd>{title}</dd>

        {/* <dt>Salary:</dt>
        <dd>${salary}</dd>

        <dt>Phone:</dt>
        <dd>{phone}</dd>

        <dt>Email:</dt>
        <dd>{email}</dd> */}

        <dt>Favorite animal:</dt>
        <dd>
          {getAnimalEmoji(animal)} {animal}
        </dd>
        {/* <dt>Location: </dt>
        <dd>{location}</dd> */}
        <dt>Department: </dt>
        <dd>{department}</dd>

        {/* <dt>Skills: </dt>
        <dd>{skills}</dd> */}

        <dt>Years worked:</dt>
        <dd>{fullYearsWorked}</dd>
      </dl>
      <button onClick={() => navigate(`/person/${id}`)}>
        Look up or edit details
      </button>
      {reminder && monthsWorked > 6 && (
        <p style={{ color: "green", fontWeight: "bold" }}>{reminder}</p>
      )}
      {reminder && monthsWorked <= 6 && (
        <p style={{ color: "hsl(38, 94%, 45%)", fontWeight: "bold" }}>
          {reminder}
        </p>
      )}
    </div>
  );
}
export default PersonCard;
