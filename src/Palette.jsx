export default function Palette({ COLORS, setSelectedColor }) {
  const handleClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <menu className="palette">
      {COLORS.map((color) => {
        return (
          <li
            key={color}
            className={`swatch ${color}`}
            onClick={() => {
              handleClick(color);
            }}
          />
        );
      })}
      ;
    </menu>
  );
}
