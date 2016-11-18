
import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

import './Slider.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'react-image-gallery/build/image-gallery.css';

const IMAGE_PATH = './img/events/';
const EMBED_URLS = [
  'https://www.youtube.com/watch?v=bP_f9LxxJwM',
  'https://twitter.com/search?f=tweets&q=%23GEhack2015&src=typd',
  'https://github.com/YSZhuoyang/Get-Started-With-Kinect',
  'https://github.com/YSZhuoyang/Get-Started-With-DX11'
];


class Slider extends Component {
  constructor() {
    super();
    this.state = {
      showIndex: false,
      slideOnThumbnailHover: false,
      showBullets: true,
      infinite: true,
      showThumbnails: false,
      showFullscreenButton: false,
      showGalleryFullscreenButton: false,
      showPlayButton: false,
      showGalleryPlayButton: false,
      showNav: true,
      slideInterval: 2500,
      showVideo: {},
    };
  }

  _getStaticImages() {
    let images = [];
    for (let i = 0; i < 4; i++) {
      images.push({
        original: `${IMAGE_PATH}${i + 1}.jpg`,
        link: `${EMBED_URLS[i]}`
      });
    }

    return images;
  }

  _onImageClick(event) {
    let img_index = this._imageGallery.getCurrentIndex();
    console.debug('clicked on image', event.target, 'at index', img_index);
  }

  _onImageLoad(event) {
    console.debug('loaded image', event.target.src);
    this._imageGallery.play();
  }

  _onSlide(index) {
    console.debug('slid to index', index);
  }

  _onPause(index) {
    console.debug('paused on index', index);
  }

  _onScreenChange(fullScreenElement) {
    console.debug('isFullScreen?', !!fullScreenElement);
  }

  _onPlay(index) {
    console.debug('playing from index', index);
  }

  _handleInputChange(state, event) {
    this.setState({[state]: event.target.value});
  }

  render() {
    const images = this._getStaticImages();

    return (
      <section className='slider'>
        <ImageGallery
          ref={i => this._imageGallery = i}
          items={images}
          lazyLoad={false}
          onClick={this._onImageClick.bind(this)}
          onImageLoad={this._onImageLoad.bind(this)}
          onSlide={this._onSlide.bind(this)}
          onPause={this._onPause.bind(this)}
          onScreenChange={this._onScreenChange.bind(this)}
          onPlay={this._onPlay.bind(this)}
          infinite={this.state.infinite}
          showBullets={this.state.showBullets}
          showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
          showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
          showThumbnails={this.state.showThumbnails}
          showIndex={this.state.showIndex}
          showNav={this.state.showNav}
          slideInterval={parseInt(this.state.slideInterval, 10)}
          slideOnThumbnailHover={this.state.slideOnThumbnailHover}
        />
      </section>
    );
  }
}

export default Slider;
