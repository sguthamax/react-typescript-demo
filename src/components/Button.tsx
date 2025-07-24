type ButtonMouseEvent = React.MouseEvent<HTMLButtonElement>

type ButtonProps = {
    children: string,
    onClick: (event: ButtonMouseEvent, id: number) => void
}

function Button({ onClick, children}: ButtonProps) {
    function handleClick(event: ButtonMouseEvent) {
        /*
        This handleClick function passes an id when calling its props.Onclick function. As a result the handler
        function in the parent component can identify which component called it, which can be useful to be able to
        use a single handleClick funtion for multiple components and to determine a unique behaviour of the handleClick 
        function for each one.
        */
        onClick(event, 1)
    }
    return (
        <button onClick={handleClick}>{children}</button>
    )
}

export default Button