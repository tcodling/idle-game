import React from 'react'

function Store2(props) {
    return (
        <div className='store'>
            <h4>Jobs</h4>
            <button value='paper' onClick={props.click}>Paper Run $10</button>
            <button value='cleaner' onClick={props.click}>Cleaner $20</button>
            <button value='checkout' onClick={props.click}>Checkout Operator $30</button>
        </div>
    )
}

export default Store2