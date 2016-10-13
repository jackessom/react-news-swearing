const React = require('react');
const Reqwest = require('reqwest');
const SearchBox = require('../components/SearchBox');
const SearchResults = require('../components/SearchResults');

module.exports = React.createClass({
  getInitialState: function() {
    return {results: null, selectedArticle: null};
  },
  handleSearch: function(term) {
    if (term.length > 2) {
      Reqwest({
        url: 'https://content.guardianapis.com/search?api-key='+process.env.GUARDIAN_API_KEY+'&show-fields=headline,thumbnail,trailText&page-size=4&q='+term,
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
  setSelected: function(article) {
    this.props.setSelected(article);
  },
  render: function() {
    return (
      <div>
        <SearchBox onSearch={this.handleSearch} />
        {this.state.results &&
          <SearchResults results={this.state.results} setSelected={this.setSelected} />
        }
      </div>
    );
  }
});
