import React from 'react'

function Store(props) {
    return (
        <div className='store'>
            <h4>Equipment</h4>
            <button value='beanie' onClick={props.click}>Beanie $10</button>
            <button value='sneakers' onClick={props.click}>Sneakers $20</button>
            <button value='jeans' onClick={props.click}>Jeans $30</button>
        </div>
    )
}

export default Store