var React - require('react');
var Main = require('../components/Main');
var Saved = require('../components/Saved');
var Search = require('../components/Search.js');

var Router = require('react-router');
var Route = Router.IndexRouter;

module.exports = (
  <Route path="/" component{Main}>
    <Route path="/search" component={Search} />
    <Route path="/saved" component={Saved} />
    <IndexRoute component={Search} />
  </Route>
);
