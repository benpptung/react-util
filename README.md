# react-util

## isEmail

detect string is email or not

## viewsize

detect current view size: {width, height}

## bindResize({ReactComponent})

- add viewsize.{width, height} to `state` in constructor.

So, you can know current window width or height like following:

```
var winWidth = this.state.viewsize.width;

```

- listen to window `resize` event. and update this.state automatically. At least `20` ms between each update.

- No memory leak. Bind listener in `componentDidMount`, and remove listener in `componentWillUnmount`.

## Usage

Call it in a React component Constructor. 

```
const React = require('react');
const inherits = require('inherits');
const util = require('react-util');

inherits(MyComponent, React);
module.exports = MyComponent;
var prototype = MyComponent.protoype;


function MyComponent(props) {
  React.Component.call(this, props);

  util.bindResize(this); <-- call it, then it's done.
}


```