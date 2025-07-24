import { useState } from "react";
import Private from "./Private";
import Profile from "./Profile";

function Auth () {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    function handleLoginClick() {
        if (isLoggedIn) {
            setIsLoggedIn(false)
            return
        }

        setIsLoggedIn(true)
    }

    return <div>
        <button onClick={handleLoginClick}>
            {!isLoggedIn ? 'Login' : 'Logout'}
        </button>
        <br /><br />
        <Private isLoggedIn={isLoggedIn} component={Profile}/>
    </div>
}

export default Auth