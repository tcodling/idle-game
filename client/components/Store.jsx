import React from 'react'

function Store(props) {
    return (
        <>
        {props.jobs ? (
        <div className='store'>
            <h4>Jobs</h4>
            <button value='paper' onClick={props.upClick}>Paper Run $10</button>
            <button value='cleaner' onClick={props.upClick}>Cleaner $20</button>
            <button value='checkout' onClick={props.upClick}>Checkout Operator $30</button>
        </div>
        ) : (
        <div className='store'>
        <h4>Plant Store</h4>
            <button value='plant1' onClick={props.upSecond}>plant1 $10</button>
            <button value='plant2' onClick={props.upSecond}>plant2 $20</button>
            <button value='plant3' onClick={props.upSecond}>plant3 $30</button>
        </div>
        )}
        </>
    )
}

export default Store