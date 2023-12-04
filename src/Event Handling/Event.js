import React from 'react'
const Event = () => {
    const display = () => {
        console.log("hi")
    }
    return (
        <div>
            <h2> Function Component</h2>
            <button onClick={display}>Click Me</button>
        </div>
    )
}
export default Event;