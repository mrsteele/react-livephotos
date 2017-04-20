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
      photoSrc={'url-to-photo.jpg'}
      videoSrc={'url-to-video.mov'}
    />
  </div>
)
```

### License

MIT
