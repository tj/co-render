
/**
 * Module dependencies.
 */

var co = require('co');
var render = require('..');

// swig mapped to .html

co(function *(){
  var user = {
    name: 'tobi',
    species: 'ferret'
  };


  var html = yield render('examples/user.html', { user: user, engine: 'swig' });
  console.log(html);
});

// jade, engine implied by extname

co(function *(){
  var user = {
    name: 'tobi',
    species: 'ferret'
  };


  var html = yield render('examples/user.jade', { user: user });
  console.log(html);
});

// ejs, engine implied by extname, with in-memory cache of the template function

co(function *(){
  var user = {
    name: 'tobi',
    species: 'ferret'
  };


  var html = yield render('examples/user.ejs', { user: user, cache: true });
  console.log(html);
});

// many in parallel

var tobi = {
  name: 'tobi',
  species: 'ferret'
};

var loki = {
  name: 'loki',
  species: 'ferret'
};

var luna = {
  name: 'luna',
  species: 'cat'
};

co(function *(){
  var a = render('examples/user.html', { user: tobi, engine: 'swig' });
  var b = render('examples/user.jade', { user: loki });
  var c = render('examples/user.ejs', { user: luna });
  var html = yield [a, b, c];
  html = html.join('');
  console.log(html);
});