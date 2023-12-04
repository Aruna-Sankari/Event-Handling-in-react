import React from 'react'
import { Component } from 'react'
class Handle extends Component {
    render() {
        const dis = () => {
            console.log("hurrah!")
        }
        dis()


        return (
            <div>
                <h2>Class Component</h2>
                <button onClick={dis}>Click Me</button>
            </div>
        )
    }
}
export default Handle;