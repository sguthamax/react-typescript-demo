import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export default function Box () {
    const theme = useContext(ThemeContext)

    const style = {
        backgroundColor: theme.primary.main,
        color: theme.primary.text,
        fontWeight: theme.fontWeight
    }

    return (
        <div style={style}>Theme Context</div>
    )
}