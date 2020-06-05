import React from 'react'
import Square from './Square'
import Item from './Item'

import { moveItem } from '../game.js'

function handleSquareClick(toX, toY) {
  moveItem(toX, toY)
}

function renderSquare(i, [positionX, positionY]) {
    const x = i % 8
    const y = Math.floor(i / 8)
    const isItemHere = positionX === x && positionY === y
    const item = isItemHere ? <Item /> : null
    
    return <div onClick={() => handleSquareClick(x, y)}><Square key={i}>{item}</Square></div>
}

function Board(props) {
    const squares =[]
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, props.itemPosition))
    }

    return (
        <div id='board'>
            {squares}
        </div>
    )
}

export default Board