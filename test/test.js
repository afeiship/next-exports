var nx = require('next-js-core2');
require('../src/next-exports');

test('nx.exports', function() {
  var obj = {
    name: '1290657123@qq.com',
    fn1: function() {
      console.log('fn1');
    },
    fn2: function() {
      // console.log('excute fn2 method', this.name);
      return 'fn2_' + this.name;
    }
  };

  var result = {
    name: 'result-name'
  };

  var rs = nx.exports(['fn1', 'fn2'], obj, result);
  expect(Object.keys(rs)).toEqual(['name', 'fn1', 'fn2']);
  expect(rs.fn2()).toBe('fn2_result-name');
});
