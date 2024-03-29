var axios = require('axios');
var APIKey = "3c2d08364d854daba3ced9bdee718513";

var helpers = {
  runQuery: function(term, start, end) {
    var term = term.trim();
    var start = start.trim() + "0101";
    var end = end.trim() + "1231";

    console.log("Query Run");

    return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
        'api-key': APIKey,
        'q': term,
        'begin_date': start,
        'end_date': end
      }
    })
    .then(function(results){
      console.log("Axios Results ", results.data.response);
      return results.data.response;
    });
  },
  getSaved: function(){
    return axios.get('/api/saved')
    .then(function(results){
      console.log("axios results ", results);
      return results;
    })
  },
  postSaved: function(title, date, url){
    var newArticle = {
      title: title,
      date: date,
      url: url
    };
    return axios.post('/api/saved', newArticle)
    .then(function(results){
      console.log("axios results ", results._id);
      return results._id;
    })
  },
  deleteSaved: function(title, data, url) {
    return axios.delete('/api/saved', {
      params: {
        'title': title,
        'data': data,
        'url': url
      }
    })
    .then(function(results){
      console.log("axios results ", results);
      return results;
    })
  }
}

module.exports = helpers;
