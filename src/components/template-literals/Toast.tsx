type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'bottom' | 'center'

type ToastProps = {
    /*The following line effectively replaces center-center for center, by excluding center-center and then adding center as 
    a union type
    */
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}

function Toast ({position}: ToastProps) {
    return <div>
        Toast notification position - <b>{position}</b>
    </div>
}

export default Toast