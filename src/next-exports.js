(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.exports = function(inMethods, inSource, inTarget) {
    inMethods.forEach(function(method) {
      inTarget[method] = function() {
        return inSource[method].apply(inSource, arguments);
      };
    });
    return inTarget;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.exports;
  }
})();
