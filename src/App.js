import * as pi from "./math";

export default function App() {
  return (
    <ul>
      <li>{pi.default}</li>
      <li>{pi.doublePi()}</li>
      <li>{pi.triplePi()}</li>
    </ul>
  );
}
