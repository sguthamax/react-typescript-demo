import { PersonProps } from "./Person.types"

function Person({ name }: PersonProps) {
    return (
        <div>{name.first} {name.last}</div>
    )
}

export default Person