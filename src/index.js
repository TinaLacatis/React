import "./style.css";

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const customStyle = {
  color: "blue",
  fontSize: "30px",
  border: "1px solid black",
};
customStyle.color = "purple";

const img = "https://picsum.photos/200";
root.render(
  <div>
    <h1 style={customStyle} className="heading">
      My favourite foods
    </h1>
    <div>
      <img src={img + "?grayscale"} alt="img" />
    </div>
  </div>
);
