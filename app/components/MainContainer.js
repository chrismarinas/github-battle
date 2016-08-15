import React from 'react'
import { transparentBg } from '../styles'

function MainContainer(props) {
    return (
        <div className="jumbotron col-sm text-center" style={transparentBg}>
            {props.children}
        </div>
    )
}

export default MainContainer