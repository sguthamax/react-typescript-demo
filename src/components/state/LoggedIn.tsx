import { useState } from "react"

function LoggedIn() {

    const [ isLoggedIn, setIsLoggedIn ] = useState(false)

    function handleClickLogin() {
        setIsLoggedIn(true)
    }

    function handleClickLogout() {
        setIsLoggedIn(false)
    }


    if (isLoggedIn) {
        return (
            // Return logout button and logged in text when user is logged in 
            <div>
                <div>User is logged in</div><br />
                <div><button onClick={handleClickLogout}>Logout</button></div>
            </div>
        )
    }

    return (
        // Return login button and logged out text when user is logged in 
        <div>
            <div>User is logged out</div><br />
            <div><button onClick={handleClickLogin}>Login</button></div>
        </div>
    )

}

export default LoggedIn