import React from 'react'

function Button(props) {
    return (
        <div onClick={props.click} id='button'>Build</div>
    )
}

export default Button