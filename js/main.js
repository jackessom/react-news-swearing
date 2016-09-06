var Container = React.createClass({
  getInitialState: function() {
    return {results: null};
  },
  handleSearch: function(term) {
    if (term.length > 2) {
      reqwest({
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
          onChange={this.handleChange}
          placeholder="Search the news" />
    );
  }
});

var Results = React.createClass({
  render: function() {
    var articles = [];
    for (var i = 0; i < this.props.results.length; i++) {
      articles.push(this.props.results[i]);
    };
    console.log(articles);
    return (
      <section id="Results">
        {articles.map(function(result) {
           return <Article
                    key={result.id}
                    title={result.fields.headline}
                    thumbnail={result.fields.thumbnail}
                    url={result.webUrl}/>;
        })}
      </section>
    );
  }
});

var Article = React.createClass({
  render: function() {
    return (
      <article>
        <img alt={this.props.title} src={this.props.thumbnail} />
        <h2>{this.props.title}</h2>
        <p><a href={this.props.url} target="_blank">Go to article</a></p>
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
