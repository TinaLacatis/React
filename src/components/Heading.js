export default function App() {
  const hour = new Date().getHours();
  let greeting;

  const customStyle = {
    color: "blue",
    fontSize: "30px",
    border: "5px solid black",
  };

  if (hour < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Evening";
    customStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}
