import * as Calculator from "./calculator";

export default function App() {
  return (
    <ul>
      <li>{Calculator.add(1, 2)}</li>
      <li>{Calculator.multiply(2, 3)}</li>
      <li>{Calculator.substract(7, 2)}</li>
      <li>{Calculator.divide(5, 2)}</li>
    </ul>
  );
}
