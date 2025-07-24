import Login from "./Login"

type PrivateProps = {
    isLoggedIn: boolean,
    component: React.ComponentType
}

function Private ({ isLoggedIn, component: Component} : PrivateProps) {
    if (isLoggedIn) {
        return <Component />
    }

    return <Login />
}

export default Private