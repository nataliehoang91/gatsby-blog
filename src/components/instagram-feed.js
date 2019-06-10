import React from "react"
import PropTypes from "prop-types"
import styles from "../components/main.module.css"

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
      <>
        <h1>My latest memories</h1>
        <div className={styles.wrapImg}>
          {this.state.images.map(url => (
            <img src={url} className={styles.img} />
          ))}
        </div>
      </>
    )
  }
}

InstagramFeed.propTypes = {
  username: PropTypes.string.isRequired,
}

export default InstagramFeed
