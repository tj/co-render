
var assert = require('assert');
var render = require('..');
var co = require('co');

describe('co-render', function(){
  it('should render jade template', function(){
    return co(function *(){
      var html = yield render(__dirname + '/fixtures/user.jade', {
        user: {
          name: 'tobi',
          species: 'ferret'
        }
      });

      assert.equal(html, '<p>tobi is a ferret</p>');
    });
  })
})
