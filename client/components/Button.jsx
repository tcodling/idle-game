import React from 'react'

function Button(props) {
    return (
        <div onClick={props.click} id='button'>Get Money</div>
    )
}

export default Button