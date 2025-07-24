type RandomNumberType = {
    value: number
}

type PositiveNumberType = RandomNumberType & {
    isPositive: boolean,
    isNegative?: never,
    isZero?: never
}

type NegativeNumberType = RandomNumberType & {
    isPositive?: never,
    isNegative: boolean,
    isZero?: never
}

type ZeroType = {
    value: 0
    isPositive?: never,
    isNegative?: never,
    isZero: boolean
}

type RandomNumberProps = PositiveNumberType | NegativeNumberType | ZeroType

function RandomNumber ({
    value,
    isPositive,
    isNegative,
    isZero
}: RandomNumberProps) {
    return (
        <div>
            {value} { isPositive && 'Positive'} { isNegative && 'Negative'} {' '}
            {isZero && 'Zero'}
        </div>
    )
}

export default RandomNumber