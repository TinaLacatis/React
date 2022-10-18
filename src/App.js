import pi, {doublePi, triplePi} from "./math";

export default function App() {
  return (
    <ul>
      <li>{pi}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
    </ul>
  );
}
