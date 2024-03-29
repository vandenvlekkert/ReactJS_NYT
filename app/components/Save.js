var React = require('react');
var helpers = require('../utils/helpers');
var Man = React.createClass ({
  getInitialState: function() {
    return { savedArticles: ""};
  },

  componentDidMount: function() {
    helpers.getSaved().then(function(articleData) {
      this.setState({ savedArticles: articleData.data });
      console.log("saved results", articleData.data);
    }.bind(this));
  },

  handleClick: function(item) {
    console.log('Clicked');
    console.log(item);

    helpers.getSaved().then(function(articleData) {
      this.setState({ savedArticles: articleData.data });
      console.log("saved results", articleData.data);
    }.bind(this));
  },

  renderEmpty: function() {
    return(
      <li className="list-group-item">
        <h3>
          <span>
            <em>Save your first article...</em>
          </span>
        </h3>
      </li>
    );
  },

  renderArticles: function() {
    return this.state.savedArticles.map(function(article, index) {
      return (
        <div key={index}>
          <li className="list-group-item">
            <h3>
            <span>
              <em>{article.title}</em>
            </span>
            <span className="btn-group pull-right">
              <a href={article.url} rel="noopener norefferer" target="_blank" />
                <button className="btn btn-primary" onClick={() => this.handleClick(article)}>Delete></button>
                  </span>
                </h3>
                <p>Date Published: {article.date}</p>
              </li>
            </div>
          );
        }.bind(this));
      },
      renderContainer: function() {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-download" aria-hidden="true"></i> Saved Articles</strong>
                </h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {this.renderArticles()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  render: function() {
    if(!this.state.savedArticles) {
      return this.renderEmpty();
    }
    return this.renderContainer();
  }
});

module.exports = Main;  
