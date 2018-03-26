import React, { Component } from 'react';

class Cam extends Component {
  constructor(props) {
    super(props);

    let constraints = {
      audio: false,
      video: true
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  handleSuccess = stream => {
    // const videoTracks = stream.getVideoTracks();
    stream.oninactive = () => {
      console.log('stream inactive');
    };
    this.videoEl.srcObject = stream;
  };

  handleError = error => {
    console.log(error);
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <video
          ref={videoEl => {
            this.videoEl = videoEl;
          }}
          autoPlay
          playsInline
        />
      </div>
    );
  }
}

export default Cam;
