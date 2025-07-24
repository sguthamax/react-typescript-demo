type InputProps = React.ComponentProps<'input'>

function CustomInput(props: InputProps) {
    return <div>
        HTML Wrap Input: <input {...props} />
    </div>
}

export default CustomInput