var Container = React.createClass({
  getInitialState: function() {
    return {results: null};
  },
  handleSearch: function(term) {
    var self = this;
    if (term.length > 2) {
      reqwest({
        url: 'https://content.guardianapis.com/search?api-key=772e8012-6a3d-43fd-9851-516bcfe7afa8&q='+term,
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
        <Results results={this.state.results} />
      </div>
    );
  }
});

var SearchBox = React.createClass({
  getInitialState: function() {
    return {searchTerm: ''};
  },
  handleChange: function(e) {
    this.setState({searchTerm: e.target.value});
    this.props.onSearch(e.target.value);
  },
  render: function() {
    return (
      <DebounceInput
          minLength={2}
          debounceTimeout={300}
          onChange={this.handleChange} />
    );
  }
});

var Results = React.createClass({
  render: function() {
    if (this.props.results) {
      var articles = [];
      for (var i = 0; i < this.props.results.length; i++) {
        articles.push(this.props.results[i]);
      };
      return (
        <section id="Results">
          {articles.map(function(result) {
             return <Article key={result.id} data={result}/>;
          })}
        </section>
      );
    } else {
      return (
        <p>Please search above</p>
      );
    }
  }
});

var Article = React.createClass({
  render: function() {
    console.log(this.props.data);
    return (
      <article>
        <span>{this.props.data.sectionName}</span>
        <h2>{this.props.data.webTitle}</h2>
        <p><a href={this.props.data.webUrl} target="_blank">Go to article</a></p>
      </article>
    );
  }
});

var SelectedArticle = React.createClass({
  render: function() {
    return (
      <section id="SelectedArticle">
        <article>Selected article</article>
      </section>
    );
  }
});

ReactDOM.render(<Container />, document.getElementById('container'));