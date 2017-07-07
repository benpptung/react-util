# react-util

## isEmail

detect string is email or not

## viewsize

detect current view size: {width, height}

## bindViewSize({ReactComponent})

Should be called in ReactComponent constructor.

add ViewSize{width, height} to `state` in constructor, listen to window `resize` event. and update this.state automatically. At least `20` ms between each update. 