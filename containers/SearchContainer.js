var React = require('react');
var Reqwest = require('reqwest');
var SearchBox = require('../components/SearchBox');
var Article = require('../components/Article');

module.exports = React.createClass({
  getInitialState: function() {
    return {results: null};
  },
  handleSearch: function(term) {
    if (term.length > 2) {
      Reqwest({
        url: 'https://content.guardianapis.com/search?api-key=772e8012-6a3d-43fd-9851-516bcfe7afa8&show-fields=headline,thumbnail&order-by=relevance&q='+term,
        type: 'json',
        method: 'get',
        contentType: 'application/json',
        crossOrigin: true,
        withCredentials: false,
        error: function (err) { },
        success: this.setResults
      });
    } else {
      this.setState({results: null});
    }
  },
  setResults: function(resp) {
    this.setState({results: resp.response.results});
  },
  render: function() {
    var articles = [];
    if (this.state.results) {
      for (var i = 0; i < this.state.results.length; i++) {
        var result = this.state.results[i];
        articles.push(
          <Article
             key={result.id}
             title={result.fields.headline}
             thumbnail={result.fields.thumbnail}
             url={result.webUrl}/>
        );
      };
    }
    return (
      <div>
        <SearchBox onSearch={this.handleSearch} />
        {this.state.results &&
          <section id="results">{articles}</section>
        }
      </div>
    );
  }
});
