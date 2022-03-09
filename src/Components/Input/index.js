import { StyleInput } from "./input.style"

const Input = (props) => {
    const { value, helperText, label, onchange, required, name, variant} = props
    return (
        <StyleInput {...props}>
            <div>
                <input type="text" value={value} id={name} name={name} required={required} onChange={e => onchange(e)}
                    variant={variant} />
                <label htmlFor={name}>{label}</label>
            </div>
            {
                helperText && <small>{helperText}</small>
            }
        </StyleInput>
    )
}

export default Input