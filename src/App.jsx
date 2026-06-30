import Highlighter from "./Highlighter.jsx";
import Palette from "./Palette.jsx";
import { useState } from "react";

const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "black",
  "white",
];

export default function App() {
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  return (
    <main>
      <h1>Test</h1>
      <Highlighter selectedColor={selectedColor} />
      <Palette COLORS={COLORS} setSelectedColor={setSelectedColor} />
    </main>
  );
}
