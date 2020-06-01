import React from 'react'

function Store2(props) {
    return (
        <div className='store'>
            <h4>Jobs</h4>
            <div onClick={props.click}>Paper Run $10</div>
            <div onClick={props.click}>Cleaner $20</div>
            <div onClick={props.click}>Checkout Operator $30</div>
        </div>
    )
}

export default Store2