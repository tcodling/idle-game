import React from 'react'

function Button(props) {
    return (
        <div onClick={props.click} id='button'>Get Points</div>
    )
}

export default Button