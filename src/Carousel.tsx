import React, { Component } from "react";
import { Photo } from "@frontendmasters/pet";

interface IProps {
  media: Photo[];
}

interface IState {
  active: number;
  photos: string[];
}

class Carousel extends Component {
  public static getDerivedStateFromProps({ media }: IProps) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return photos;
  }

  public state = {
    photos: [],
    active: 0
  };

  public handleIndexClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }

    if (e.target.dataset.index) {
      this.setState({
        active: +e.target.dataset.index
      });
    }
  };

  public render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        {photos.map((photo, index) => (
          // eslint-disable-next-line
          <img
            key={photo}
            onClick={this.handleIndexClick}
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
