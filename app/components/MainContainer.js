var React = require('react');
var styles = require('../styles');

function MainContainer(props) {
    return (
        <div className="jumbotron col-sm text-center" style={styles.transparentBg}>
            {props.children}
        </div>
    )
}

module.exports = MainContainer;