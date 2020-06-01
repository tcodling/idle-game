import React from 'react'

function Store(props) {
    return (
        <div onClick={props.click} id='store'>Store + 1</div>
    )
}

export default Store