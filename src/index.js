import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>My favourite foods</h1>
    <ul>
      <li>Pasta</li>
      <li>Pizza</li>
      <li>Soup</li>
    </ul>
  </div>
);
