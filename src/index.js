import { createRoot } from "react-dom/client";

//createRoot(document.getElementById("root")).render(
//or
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <div>
    <h1>Hello</h1>
    <p> Tis is a pharagraph</p>
  </div>
);
