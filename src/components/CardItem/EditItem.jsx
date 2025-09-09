import { EditIcon } from "./EditIcon"
import { EditButtons } from "./EditButtons"
import { FormProvider } from "../Tools/FormProvider"
import { CloseIcon } from "./CloseIcon"

export function EditItem(props) {
    const { editItem, removeItem, setEditMode, editMode } = props
    return (
        <FormProvider>
            <>
                {props.children}
                {
                    editMode
                        ? <>
                            <CloseIcon setEditMode={setEditMode} />
                            <div className="bottom-line">
                                <EditButtons editItem={editItem} removeItem={removeItem} setEditMode={setEditMode} />
                            </div>
                        </>
                        : <EditIcon editItem={() => setEditMode(true)} />
                }
            </>
        </FormProvider>
    )
}