import React from 'react'

function Store(props) {
    return (
        <div id='store'>
            <div onClick={props.click}>Beanie $10</div>
            <div onClick={props.click}>Sneakers $20</div>
            <div onClick={props.click}>Jeans $30</div>
        </div>
    )
}

export default Store