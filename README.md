# react-livephotos

Wraps Apple's "Live Photos" in a react app.

### Usage

Usage is simple.

```javascript
import LivePhotos from 'react-livephotos'

export default ({...props}) => (
  <div>
    <h1>Some cool component!</h1>
    <LivePhotos
      className='whatever-you-want'
      photoSrc='url-to-photo.jpg'
      videoSrc='url-to-video.mov'
    />
  </div>
)
```

### Properties

We support all the properties provided by [LivePhotosKit.Player](https://developer.apple.com/reference/livephotoskitjs/livephotoskit.player). The only one we allow is `className` which is added to the wrapping span element around the player.

### License

MIT
