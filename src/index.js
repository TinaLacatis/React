import "./style.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const hour = new Date().getHours();

let greeting;

const customStyle = {
  color: "",
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

root.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>
);
