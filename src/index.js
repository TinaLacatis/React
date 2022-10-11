import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const name = "Tina";
const number = Math.round(Math.random() * 10);

root.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your lucky number is {number}</p>
  </div>
);
