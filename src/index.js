(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.exports = function (inSource, inMethods, inTarget) {
    var target = inTarget || {};
    inMethods.forEach(function (method) {
      target[method] = function () {
        return inSource[method].apply(inSource, arguments);
      };
    });
    return target;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.exports;
  }
})();
