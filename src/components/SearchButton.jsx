import { FaSearch } from "react-icons/fa";

function SearchButton({ onClick, label = "Buscar" }) {
  return (
    <button onClick={onClick}>
      <FaSearch size={16} style={{ marginRight: 8 }} />
      {label}
    </button>
  );
}

export default SearchButton;