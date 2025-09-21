import { createContext, useContext, useState, useMemo } from "react"

const FormContext = createContext()
const SelectContext = createContext()

export function FormProvider(props) {
    const context = useMemo(() => ({}), [])
    return (
        <FormContext.Provider value={context}>
            {props.children}
        </FormContext.Provider>
    )
}

export function Input(props) {
    const [input, setInput] = useState(props.hasOwnProperty('value') ? props.value : '')
    const context = useContext(FormContext)
    context[props.name] = input
    const onChange = props.onChange || (() => { })
    function changeField(e) {
        onChange.call(e.target, e)
        setInput(e.target.value)
    }
    return <input type={props.type || 'text'} name={props.name} className={props.className} value={input} onChange={changeField} />
}

function getChecked(props) {
    return props.checked ? props.value || true : ''
}

export function Checkbox(props) {
    const [input, setInput] = useState(getChecked(props))
    const context = useContext(FormContext)
    context[props.name] = input
    const onChange = props.onChange || (() => { })
    function changeField(e) {
        console.log(e.target.value)
        onChange.call(e.target, e)
        setInput(getChecked(e.target))
    }
    return <input type='checkbox' name={props.name} checked={input && true || false} className={props.className} value={input} onChange={changeField} />
}

export function RadioGroup(props) {
    const [input, setInput] = useState(props.value)
    const radiosSetChecked = useMemo(() => ({}), [])
    const context = useContext(FormContext)
    const onChange = props.onChange || (() => { })
    context[props.name] = input
    const seclectRadio = (value) => {
        for (var key in radiosSetChecked) {
            if (radiosSetChecked.hasOwnProperty(key)
                && key !== value) {
                delete radiosSetChecked[key]
                const setChecked = radiosSetChecked[key]
                setChecked(false)
            }
        }
        onChange({ target: { value } })
        setInput(value)
    }
    return <SelectContext.Provider value={{ radiosSetChecked, seclectRadio }}>
        {props.children}
    </SelectContext.Provider>
}

export function Radio(props) {
    const context = useContext(FormContext)
    const [checked, setChecked] = useState(props.value === context[props.name])
    const { radiosSetChecked, seclectRadio } = useContext(SelectContext)
    radiosSetChecked[props.value] = setChecked
    const onChange = props.onChange || (() => { })
    function changeField(e) {
        setChecked(true)
        onChange.call(e.targer, e)
        seclectRadio(e.target.value)
    }
    return <input type='radio' name={props.name} checked={checked} className={props.className || ""} value={props.value} onChange={changeField} />
}

export function Select(props) {
    const [input, setInput] = useState(props.value)
    const context = useContext(FormContext)
    const onChange = props.onChange || (() => { })
    function onChangeSelect(e) {
        onChange(e)
        setInput(e.target.value)
    }
    context[props.name] = input
    return (
        <select className={props.className || ''} value={input} onChange={onChangeSelect}>
            {props.children}
        </select>
    )
}

export function Option(props) {
    const onChange = props.onChange || (() => { })
    return <option name={props.name} className={props.className || ""} value={props.value} onChange={onChange} >
        {props.children}
    </option>
}

export function Submit(props) {
    var submit = props.submit || (() => { })
    var outSubmit = props.outSubmit || {}
    var context = useContext(FormContext)
    function onClick(e) {
        submit(context)
    }
    outSubmit.out = onClick
    return props.hasOwnProperty('wrap')
        ? <label onClick={onClick} className={props.className || ""} >{props.children}</label>
        : <input type='button' id={props.id || ""} className={props.className || ""} value={props.value} onClick={onClick} />
}