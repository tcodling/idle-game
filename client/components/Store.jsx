import React from 'react'

function Store(props) {
    return (
        <div id='store'>
            <div onClick={props.click}>Upgrade A</div>
            <div>Upgrade B</div>
            <div>Upgrade C</div>
        </div>
    )
}

export default Store