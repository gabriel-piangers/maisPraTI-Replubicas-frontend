import { EditIcon } from "./EditIcon"
import { EditButtons } from "./EditButtons"
import { FormProvider } from "../Tools/FormProvider"
import { CloseIcon } from "./CloseIcon"

export function EditItem(props) {
    const { editItem, removeItem, setEditMode, editMode } = props
    return (
        <FormProvider>
            <>
                <div className={'list-item-content'}>
                    <div>
                        {props.children}
                    </div>
                    {
                        editMode
                            ? <CloseIcon setEditMode={setEditMode} />
                            : <EditIcon editItem={() => setEditMode(true)} />
                    }
                </div>
                {
                    editMode
                    && <div className="bottom-line">
                        <EditButtons editItem={editItem} removeItem={removeItem} setEditMode={setEditMode} />
                    </div>
                }

            </>
        </FormProvider>
    )
}