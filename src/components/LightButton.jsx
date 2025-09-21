import "../styles/Button.css";

export function LightButton({
  className = "",
  id = "",
  value = "",
  label = "botão",
  onClick = () => {
    console.log("Botão clicado!");
  },
}) {
  return (
    <button
      className={`std-light-button ${className}`}
      id={id}
      value={value}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
