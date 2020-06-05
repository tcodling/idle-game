import React from 'react'
import Item from './Item'

function renderSquare(x, y, [itemX, itemY]) {
    const isItemHere = itemX === x && itemY === y
    const piece = isItemHere ? <Item /> : null
    return <Square>{piece}</Square>
}

function Square(props) {
    return (
        <div className='square'>{props.children}</div>
    )
}

export default Square