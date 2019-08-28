import React, { Component } from "react";

class Carousel extends Component {
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return photos;
  }

  state = {
    photos: [],
    active: 0
  };

  handleIndexClick = e => {
    this.setState({
      active: +e.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        {photos.map((photo, index) => (
          // eslint-disable-next-line
          <img
            key={photo}
            onClick={this.handleIndexClick}
            onKey
            data-index={index}
            src={photo}
            className={index === active ? "active" : ""}
            alt="animal thum"
          />
        ))}
      </div>
    );
  }
}

export default Carousel;
