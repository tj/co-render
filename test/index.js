var assert = require('assert');
var co = require('co');
var render = require('../');

describe('co-render', function() {
  it('should render swig template', function(done) {
    co(function * () {
      var html = yield render(__dirname + '/fixtures/user.swig', {
        user: {
          name: 'tobi'
        }
      });

      assert.equal(html, '<p>tobi</p>');
      done();
    })();
  });
});
