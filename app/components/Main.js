var React = require('react');
var Search = rquire('./Search.js');

var Main = React.createClass({
  render: function(){
    return (
      <div className="main-container">
        <div className="jumbotron">
          <h1 className="text-center">New York Times Search</h1>
          <p className="lead text-center">A React based module to search, save and comment on articles from New York Times.</p>
        </div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;
