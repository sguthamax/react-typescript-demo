import { Name } from "./Person.types"

type PersonListProps = {
    names: Name[]
}

function PersonList ({ names }: PersonListProps) {
    return (
        <div>
            {names.map(name => 
                <h5 key={name.first}>{name.first} {name.last}</h5>
            )}
        </div>
    )
}

export default PersonList