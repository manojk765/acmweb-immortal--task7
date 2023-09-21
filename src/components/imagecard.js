import React, { Component } from 'react';

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spanRows = Math.ceil(height / 10);
    this.setState({ spans: spanRows });
  };

  render() {
    const { image } = this.props;
    const { spans } = this.state;

    return (
      <div style={{ gridRowEnd: `span ${spans}` }}>
        <img
          ref={this.imageRef}
          key={image.id}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      </div>
    );
  }
}

export default ImageCard;
