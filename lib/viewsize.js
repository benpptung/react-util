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


exports.bindViewSize = function(self) {

  Object.assign(self.state, {viewsize: viewPortSize()});
  self.__resizeTimer = null;

  self.__didMount = self.componentDidMount;
  self.__willUnmount = self.componentWillUnmount;

  self.componentDidMount = function() {
    window.addEventListener('resize', onResize);
    self.__didMount();
  };

  self.componentWillUnmount = function() {
    window.removeEventListener('resize', onResize);
    self.__willUnmount();
  };

  function onResize() {
    clearTimeout(self.__resizeTimer);
    self.__resizeTimer = setTimeout(_=> {
      self.setState({viewsize: viewPortSize()})
    }, 20);
  }
};