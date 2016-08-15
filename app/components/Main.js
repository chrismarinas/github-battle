import React from 'react'
import ReactCssTransitionGroup from 'react-addons-css-transition-group'
import '../main.css'

const Main = React.createClass({
    render() {
        return (
            <div className="main-container">
                <ReactCssTransitionGroup
                    transitionName="appear"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
                </ReactCssTransitionGroup>
            </div>
        )
    }
});

export default Main