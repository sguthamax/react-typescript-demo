import Box from "./context/Box";
import { ThemeContextProvider } from "./context/ThemeContext";
import User from "./context/User";
import { UserContextProvider } from "./context/UserContext";
import DomRef from "./ref/DomRef";
import MutableRef from "./ref/MutableRef";

export default function DemoTypeScriptContextHook () {
    return <div>
        <h2>Typescript With Context and Ref Hooks</h2>
        <h3>useContext: ThemeContext and Box Components</h3>
        <ThemeContextProvider>
            <Box />
        </ThemeContextProvider>
        <h3>useContext: User Component With Union Types</h3>
        <UserContextProvider>
            <User />
        </UserContextProvider>
        <h3>useRef: Dom Refs Component</h3>
        <DomRef />
        <h3>useRef: Mutable Refs Component</h3>
        <MutableRef />
    </div>
}