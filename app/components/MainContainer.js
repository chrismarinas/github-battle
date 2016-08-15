import React from 'react'
import { transparentBg } from '../styles'

function MainContainer({children}) {
    return (
        <div className="jumbotron col-sm text-center" style={transparentBg}>
            {children}
        </div>
    )
}

export default MainContainer