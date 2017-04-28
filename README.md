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
      width='300'
      height='200'
      photoSrc='url-to-photo.jpg'
      videoSrc='url-to-video.mov'
    />
  </div>
)
```

### Properties

We support all the properties provided by [LivePhotosKit.Player](https://developer.apple.com/reference/livephotoskitjs/livephotoskit.player).

The following are specific to this module:

* **className** (String) - The class name to apply to the containing element.
* **width** (Int) - The width of the container. Defaults to the size of the live photo.
* **height** (Int) - The height of the container. Defaults to the size of the live photo.

### License

MIT
