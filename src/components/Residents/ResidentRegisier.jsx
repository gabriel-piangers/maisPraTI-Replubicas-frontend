import { Button } from "antd"
import "../../styles/DashboardRegister.css"

export function ResidentRegisier(props) {
    const addResident = props.addResident || (() => { })
    const inputs = {}
    return (
        <form className="std-register dashboard-register" onSubmit={e => e.preventDefault()}>
            <h4>Adicione um morador</h4>
            <label>
                Nome: <input type="text" value={inputs.name} name="name" onChange={e => inputs.name = e.target.value} />
            </label>
            <Button onClick={() => {
                inputs.administrator = false
                addResident(inputs)
                props.activeModal.out(false)
            }} >
                Adicionar
            </Button>
        </form>
    )
}