import { useState } from "react"

type AuthUser = {
    email: string,
    name: string
}

const defaultUser = {
    email: "altcunningham@nightcity.com",
    name: "Alt Cunningham",
}

function UserWithTypeAssertion () {

    const [user, setUser] = useState<AuthUser>({} as AuthUser)

    function handleLogin () {
        setUser(defaultUser)
    }

    return (
        <div>
            <div>
                <button onClick={handleLogin}>Login</button>
            </div>
            <br />
            <div>
                <b>User email:</b> {user.email}
            </div>
            <div>
                <b>User name:</b>  {user.name}
            </div>
        </div>
    )
}

export default UserWithTypeAssertion

