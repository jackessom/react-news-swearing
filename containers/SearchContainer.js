var React = require('react');
var Reqwest = require('reqwest');
var SearchBox = require('../components/SearchBox');
var Results = require('../containers/Results');

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
    return (
      <div>
        <SearchBox onSearch={this.handleSearch} />
        {this.state.results &&
          <Results results={this.state.results} />
        }
      </div>
    );
  }
});
