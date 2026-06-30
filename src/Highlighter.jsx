export default function Highlighter({ selectedColor }) {
  return (
    <div className="highlighter">
      <div className="handle">
        The currently selected color is {selectedColor}
      </div>
      <div className={`tip ${selectedColor}`}></div>
    </div>
  );
}
