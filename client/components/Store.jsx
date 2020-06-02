import React from 'react'

function Store(props) {
    return (
        <>
        <div className='store'>
            <h4>Equipment</h4>
            <button value='beanie' onClick={props.upClick}>Beanie $10</button>
            <button value='sneakers' onClick={props.upClick}>Sneakers $20</button>
            <button value='jeans' onClick={props.upClick}>Jeans $30</button>
        </div>
        <div className='store'>
        <h4>Jobs</h4>
            <button value='paper' onClick={props.upSecond}>Paper Run $10</button>
            <button value='cleaner' onClick={props.upSecond}>Cleaner $20</button>
            <button value='checkout' onClick={props.upSecond}>Checkout Operator $30</button>
        </div>
        </>
    )
}

export default Store