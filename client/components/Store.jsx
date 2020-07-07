import React from 'react'

function Store(props) {
    return (
        <>
        {props.jobs ? (
        <div className='store'>
            <h4>Jobs</h4>
            <button value='paper' onClick={props.click}>Paper Run $10</button>
            <button value='cleaner' onClick={props.click}>Cleaner $20</button>
            <button value='checkout' onClick={props.click}>Checkout Operator $30</button>
        </div>
        ) : (
        <div className='store'>
        <h4>Materials</h4>
            <button value='mud' onClick={props.click}>Mud $10</button>
            <button value='wood' onClick={props.click}>Wood $20</button>
            <button value='metal' onClick={props.click}>Metal $30</button>
        </div>
        )}
        </>
    )
}

export default Store