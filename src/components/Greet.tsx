type GreetProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean
}

function Greet({name, messageCount = 0, isLoggedIn}: GreetProps) {
    return (
        <div>
            {
                isLoggedIn ?
                    `Welcome ${name}, you have ${messageCount} unread messages.`
                    :
                    `Welcome Guest`
            }
        </div>
    )
}

export default Greet