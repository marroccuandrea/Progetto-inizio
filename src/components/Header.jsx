import reactImg from "../assets/react-core-concepts.png";
const reactDescriptions = ["Foundamental", "Crucial", "Core"];
// Importo gli stili CSS
import "./Header.css";

function genRandomVal(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomVal(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
