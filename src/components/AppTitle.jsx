import React from 'react'
import '../styles/AppTitle.css'
export default function AppTitle({ children }) {
    return (
        <div>
            <h1 className='Title'>{children}</h1>
        </div>

    )
}
