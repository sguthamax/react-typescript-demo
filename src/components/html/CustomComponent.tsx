import Greet from "../Greet"

/* 
This component gets its prop types from another component (The Greet component), 
without the other component exporting its types
*/
function CustomComponent(
    {
        messageCount = 0,
        ...props
    }: React.ComponentProps<typeof Greet>) {
    return ( // Uses the same props but the functionality is slightly different from the Greet component
        <div>
            <div>
                <b>Is logged in:</b>{props.isLoggedIn ? ' Yes' : ' No'}
            </div>
            <div>
                <b>Name:</b>{props.isLoggedIn ? ` ${props.name}` : ' N/A (User is not logged in)'}
            </div>
            <div>
                <b>Message count:</b>{props.isLoggedIn ? ` ${messageCount}` : ' N/A (User is not logged in)'}
            </div>
        </div>
    )
}

export default CustomComponent