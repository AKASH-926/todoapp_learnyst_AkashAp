import React, { Component } from 'react'
import '../styles/AppTitle.css'

class AppTitle extends Component {
    constructor({ children }) {
        super()
        this.children = children
    }
    render() {
        return (
            <>
                <div>
                    <h1 className='Title'>{this.children}</h1>
                </div>

            </>
        )
    }
}

export default AppTitle