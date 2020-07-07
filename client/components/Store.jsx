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
        <h4>Plant Store</h4>
            <button value='plant1' onClick={props.click}>plant1 $10</button>
            <button value='plant2' onClick={props.click}>plant2 $20</button>
            <button value='plant3' onClick={props.click}>plant3 $30</button>
        </div>
        )}
        </>
    )
}

export default Store