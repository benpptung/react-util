'use strict';

exports.viewsize = viewPortSize;
/**
 * Get viewport height and width
 * @return {{height: (Number|*), width: (Number|*)}}
 */
function viewPortSize() {
  var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  return { width, height };
}


/***
 * Further thinking in this
 * https://davidwalsh.name/orientation-change
 */

exports.bindResize = exports.bindViewSize = function(self) {

  self.state = Object.assign({}, self.state, {viewsize: viewPortSize()});
  self.__resizeTimer = null;

  var prototype = Object.getPrototypeOf(self);

  // search methods on prototype and thisArg
  // and clone to prototype, since we have prototype
  if (prototype) {
    prototype.__didMount = typeof self.componentDidMount == 'function' ?
      self.componentDidMount : prototype.componentDidMount;
    prototype.__willUnmount = typeof self.componentWillUnmount == 'function' ?
      self.componentWillUnmount : prototype.componentWillUnmount;

  }
  else {
    // search methods on thisArg
    self.__didMount = self.componentDidMount;
    self.__willUnmount = self.componentWillUnmount;
  }

  // bind new method on thisArg
  self.componentDidMount = function() {
    window.addEventListener('resize', onResize);

    // if user didn't define method, it is undefined
    if (typeof self.__didMount == 'function') {
      self.__didMount();
    }

  };

  // bind new method on thisArg
  self.componentWillUnmount = function() {
    window.removeEventListener('resize', onResize);

    // if user didn't define method, it is undefined
    if (typeof self.__willUnmount == 'function') {
      self.__willUnmount();
    }
  };

  function onResize() {
    clearTimeout(self.__resizeTimer);
    self.__resizeTimer = setTimeout(_=> {
      self.setState({viewsize: viewPortSize()})
    }, 20);
  }
};