import { Submit } from "../Tools/FormProvider"

export function EditButtons(props) {
    return (
        <>
            <input type='button' className='std-button add-item' value='remover' onClick={() => {
                props.removeItem()
                props.setEditMode(false)
            }}/>
            <Submit className='add-item' value='salvar' submit={(inputs) => {
                props.editItem(inputs)
                props.setEditMode(false)
            }}/>
        </>
    )
}