import * as LivePhotosKit from 'livephotoskit'
import React, { Component, PropTypes } from 'react'

class ReactLivePhotos extends Component {
  constructor(props) {
    super(props)

    this.syncSize = this.syncSize.bind(this)
  }

  syncSize() {
    this.player.style.width = `${this.player.photoWidth}px`
    this.player.style.height = `${this.player.photoHeight}px`
    // this.player.updateSize(100)
  }

  componentDidMount() {
    const { className, ...props } = this.props
    this.player = LivePhotosKit.Player()
    this.player.proactivelyLoadsVideo = true

    for (let key in props) {
      this.player[key] = props[key]
    }

    this.player.addEventListener('photoload', this.syncSize)
    this.el.appendChild(this.player)
    this.player.stop()

    this.el.style.display = 'inline-block'
  }

  componentWillUnmount() {
    this.el.removeChild(this.player)
  }

  render() {
    return (
      <span ref={(el) => { this.el = el }} />
    )
  }
}

ReactLivePhotos.propTypes = {
  photoSrc: PropTypes.string,
  videoSrc: PropTypes.string,
}

export default ReactLivePhotos
