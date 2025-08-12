import "../styles/Button.css"

export function Button({className = "", id = "", value = "", label = "botão"}) {

    return (
        <button className={`std-button ${className}`} id={id} value={value}>
            {label}
        </button>
    )
}