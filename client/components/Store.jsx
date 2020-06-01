import React from 'react'

function Store(props) {
    return (
        <div className='store'>
            <h4>Equipment</h4>
            <div onClick={props.click}>Beanie $10</div>
            <div onClick={props.click}>Sneakers $20</div>
            <div onClick={props.click}>Jeans $30</div>
        </div>
    )
}

export default Store