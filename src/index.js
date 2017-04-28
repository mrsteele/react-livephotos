import * as LivePhotosKit from 'livephotoskit'
import React, { Component, PropTypes } from 'react'

class ReactLivePhotos extends Component {
  constructor (props) {
    super(props)

    this.syncSize = this.syncSize.bind(this)
  }

  syncSize () {
    const { width, height } = this.props
    const photoWidth = width || this.player.photoWidth
    const photoHeight = height || this.player.photoHeight

    this.player.style.width = `${photoWidth}px`
    this.player.style.height = `${photoHeight}px`
    // this.player.updateSize(100)
  }

  componentDidMount () {
    const { className, width, height, ...props } = this.props
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

  componentWillUnmount () {
    this.el.removeChild(this.player)
  }

  render () {
    return (
      <span ref={(el) => { this.el = el }} />
    )
  }
}

ReactLivePhotos.propTypes = {
  photoSrc: PropTypes.string,
  videoSrc: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

export default ReactLivePhotos
