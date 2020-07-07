import React from 'react'

function Progress(props) {
    return (
        <div id='progress'><div style={{width: `${props.percent}%`, backgroundColor: 'red', overflowX: 'hidden'}}>Hammock</div></div>
    )
}

export default Progress