type ContainerProps = {
    styles: React.CSSProperties
}

function Container ({ styles }: ContainerProps) {
    return (
        <div style={styles}>
            Styles Container
        </div>
    )
}

export default Container