import Counter from "./state/Counter"
import LoggedIn from "./state/LoggedIn"
import User from "./state/User"
import UserWithTypeAssertion from "./state/UserWithTypeAssertion"

function GroupTypeScriptStateHooks() {
    return (
        <div>
            <h2>TypeScript With React State Hooks</h2>
            <h3>useState: LoggedIn Component</h3>
            <LoggedIn />
            <h3>useState: User Component With State That Accepts Multiple Types</h3>
            <User />
            <h3>useState: User Component With Type Assertion</h3>
            <UserWithTypeAssertion />
            <h3>useReducer: Counter Component With Strict Action Types</h3>
            <Counter />
        </div>
    )
}

export default GroupTypeScriptStateHooks