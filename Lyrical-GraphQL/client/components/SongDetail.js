import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {

  render() {
    console.log(this.props)
    const song = this.props.data.loading ? "Loading..." : this.props.data.song.title
    return (
      <div>
        <h3>Song Detail</h3>
        <h5>{song}</h5>
      </div>
    )
  }
}

export default graphql(fetchSong, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);
