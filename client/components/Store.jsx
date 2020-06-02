import React from 'react'

function Store(props) {
    return (
        <>
        {/* <div className='store'>
            <h4>Equipment</h4>
            <button value='beanie' onClick={props.upClick}>Beanie $10</button>
            <button value='sneakers' onClick={props.upClick}>Sneakers $20</button>
            <button value='jeans' onClick={props.upClick}>Jeans $30</button>
        </div> */}
        <div className='store'>
        <h4>Plant Store</h4>
            <button value='plant1' onClick={props.upSecond}>plant1 $10</button>
            <button value='plant2' onClick={props.upSecond}>plant2 $20</button>
            <button value='plant3' onClick={props.upSecond}>plant3 $30</button>
        </div>
        </>
    )
}

export default Store