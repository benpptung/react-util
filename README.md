# react-util

## isEmail

detect string is email or not

## viewsize

detect current view size: {width, height}

## bindViewSize({ReactComponent})

Should be called in `ReactComponent constructor`.

- add view size {width, height} to `state` in constructor.

  - this.state.viewsize.width
  - this.state.viewsize.height


- listen to window `resize` event. and update this.state automatically, so component can render component based on new `viewsize`.

- At least `20` ms between each update. 

- Avoid memory leak: bind listener in `componentDidMount`, and remove listener in `componentWillUnmount`.