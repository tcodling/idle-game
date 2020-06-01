import React from 'react'

function Store(props) {
    return (
        <div id='store'>
            <div onClick={props.click}>Upgrade A</div>
            <div onClick={props.click}>Upgrade B</div>
            <div onClick={props.click}>Upgrade C</div>
        </div>
    )
}

export default Store