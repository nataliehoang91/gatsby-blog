import React from "react"
import PropTypes from 'prop-types';

class InstagramFeed extends React.Component {
    render() {
        return <div>Pics of {this.props.username} go here. </div>
    }
}

InstagramFeed.propTypes = {
    username: PropTypes.string.isRequired
};

export default InstagramFeed;