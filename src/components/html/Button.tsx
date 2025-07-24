type ButtonProps = {
    variant: 'primary' | 'secondary',
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

function CustomButton ({ variant, children, ...rest }: ButtonProps) {
    return <button className={`class-width-${variant}`} {...rest}>{children}</button>
}

export default CustomButton
