import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const name = "Tina Lacatis";
const year = new Date().getFullYear();

root.render(
  <div>
    <p> Created by {name} </p>
    <p> Copyright {year} </p>
  </div>
);
