function PersonCard({ name, title, salary, phone, email, animal, startDate }) {
  const start = new Date(startDate);
  const today = new Date();

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
      <p>
        <b>Title:</b> {title}
      </p>
      <p>
        <b>Salary:</b> ${salary}
      </p>
      <p>
        <b>Phone:</b> {phone}
      </p>
      <p>
        <b>Email:</b> {email}
      </p>
      <p>
        <b>Favorite animal:</b> {animal} {getAnimalEmoji(animal)}
      </p>
      <p>
        <b>Years worked:</b> {fullYearsWorked}
      </p>

      {reminder && monthsWorked > 6 && (
        <p style={{ color: "green", fontWeight: "bold" }}>{reminder}</p>
      )}
      {reminder && monthsWorked <= 6 && (
        <p style={{ color: "blue", fontWeight: "bold" }}>{reminder}</p>
      )}
    </div>
  );
}
export default PersonCard;
