type ListProps<T> = {
    itemName: string,
    items: T[],
    onClick: (value: T) => void
}

function List<T extends string | number | {}>({ itemName, items, onClick }: ListProps<T>) {

    function formatItem<T extends string | number |{}>(item: T) {
        if (typeof item === "string" || typeof item === "number") {
            return item
        } else if (item as {}) {
            const entries = Object.entries(item) //Returns the objects props, whatever they may be
            return (
                <>
                    {entries.map( // key and value must be typed
                        ([key, value]: [string, any], index) => <span key={index}><b>{key}</b>: {value}<br /></span>
                    )}
                    <br />
                </>
            )
        } else {
            return "Unknown item";
        }
    }

    return (
        <div>
            <h4>List of {itemName}</h4>
            {items.map((item, index) => {
                return (
                    <div key={index} onClick={() => onClick(item)}>
                        {formatItem(item)}
                    </div>
                )
            })}
        </div>
    )
}

export default List