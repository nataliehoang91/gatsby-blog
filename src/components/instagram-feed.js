import React from "react"
import PropTypes from "prop-types"

class InstagramFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
    }
  }

  componentDidMount() {
    fetch(`https://www.instagram.com/${this.props.username}/?__a=1`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          images: res.graphql.user.edge_owner_to_timeline_media.edges.map(
            e => e.node.display_url
          ),
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="instagramFeedContainer">
        {this.state.images.map(url => (
          <img
            src={url}
            className="instagramImage"
          />
        ))}
      </div>
    )
  }
}

InstagramFeed.propTypes = {
  username: PropTypes.string.isRequired,
}

export default InstagramFeed
