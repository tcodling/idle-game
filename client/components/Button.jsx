import React from 'react'

function Button(props) {
    return (
        <div onClick={props.click} id='button'>button</div>
    )
}

export default Button