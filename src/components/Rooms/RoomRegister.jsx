import { Button } from "antd"
import "../../styles/DashboardRegister.css"

export function RoomRegister (props) {
    const addRoom = props.addRoom || (() => {})
    const inputs = {}
    return (
            <form className="std-register dashboard-register" onSubmit={e => e.preventDefault()} >
                <h4>Adicine um novo quarto</h4>
                <label>
                    Lugares: <input type="text" value={inputs.beds} name="beds" onChange={(e) => inputs.beds = e.target.value} />
                </label>
                <label>
                    Suite: <input type="text" value={inputs.suite} name="suite" onChange={(e) => inputs.suite = e.target.value} />
                </label>
                <label>
                    Mobília: <input type="text" value={inputs.furniture} name="furniture" onChange={(e) => inputs.furniture = e.target.value}/>
                </label>
                <Button onClick={()=>{
                    addRoom(inputs)
                    props.activeModal.out(false)
                }} >
                    Adicionar
                </Button>
            </form>
    )
}