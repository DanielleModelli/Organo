import './TextField.css'

const TextField = (props) => {

    const onType = (event) => {
        props.onchange(event.target.value)
    }
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.valor} onChange={onType} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default TextField