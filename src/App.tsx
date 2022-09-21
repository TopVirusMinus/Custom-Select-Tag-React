import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Select from "./Select";

const options = [
  { label: "First Option", value: 1 },
  { label: "Second Option", value: 2 },
  { label: "Third Option", value: 3 },
  { label: "Fourth Option", value: 4 },
  { label: "Fifth Option", value: 5 },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Select options={options} />
    </div>
  );
}

export default App;
