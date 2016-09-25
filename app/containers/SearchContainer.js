var React = require('react');
var Reqwest = require('reqwest');
var SearchBox = require('../components/SearchBox');
var Results = require('./Results');
var SelectedArticle = require('../components/SelectedArticle');

module.exports = React.createClass({
  getInitialState: function() {
    return {results: null, selectedArticle: null};
  },
  handleSearch: function(term) {
    if (term.length > 2) {
      var apiKey = '772e8012-6a3d-43fd-9851-516bcfe7afa8';

      Reqwest({
        url: 'https://content.guardianapis.com/search?api-key='+apiKey+'&show-fields=headline,thumbnail,trailText&page-size=4&q='+term,
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
  setSelectedroot: function(article) {
    this.setState({selectedArticle: article});
  },
  render: function() {
    return (
      <div>
        <section>
          <div>
            <div className="half-column">
            <h1>Search the news and see who&#39;s not F***ing happy about it</h1>
            <p>Search for some news and click to select an article.</p>
            </div>
            <div className="half-column">
              <SearchBox onSearch={this.handleSearch} />
              {this.state.results &&
                <Results results={this.state.results} setSelected={this.setSelectedroot} />
              }
            </div>
          </div>
        </section>
        <section className="select-article">
          {this.state.selectedArticle ?
              <SelectedArticle article={this.state.selectedArticle} />:
             <div><h2>You haven&#39;t selected an article yet.</h2></div>
          }
        </section>


      </div>
    );
  }
});
