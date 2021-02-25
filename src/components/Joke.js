import React from 'react'

class Joke extends React.Component {
  render() {
    let { title, joke, link } = this.props;

    if (title && joke && link) {
      return <p>Loading joke</p>;
    } else {
      return (
        <div>
          <h1>{title}</h1>
          <p>{joke}</p>
          <a target="_blank" rel="noreferrer" href={link}>
            source
          </a>
        </div>
      );
    }
  }
}

export default Joke;