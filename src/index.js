import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const fName = "Tina";
const lName = "Lacatis";
const number = Math.round(Math.random() * 10);

root.render(
  <div>
    <h1>
      Hello {fName + " " + lName}!
      {/*
      Hello {fName} {lName}!
      Hello {`${fName} ${lName}`}! 
      */}
    </h1>
    <p>Your lucky number is {number}</p>
  </div>
);