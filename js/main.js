var Container = React.createClass({
  getInitialState: function() {
    return {term: ''};
  },
  handleSearch: function(term) {
    console.log('test', {term});

    reqwest({
      url: 'http://content.guardianapis.com/search?api-key=772e8012-6a3d-43fd-9851-516bcfe7afa8',
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      crossOrigin: false,
      withCredentials: false,
      error: function (err) { },
      success: function (resp) {
        console.log(resp);
      }
    });

  },
  render: function() {
    return (
      <div>
        <SearchBox onSearch={this.handleSearch}></SearchBox>
        <Results></Results>
        <SelectedArticle></SelectedArticle>
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
      <input
        type="text"
        value={this.state.searchTerm}
        onChange={this.handleChange}
      ></input>
    );
  }
});

var Results = React.createClass({
  render: function() {
    return (
      <section id="Results">
        <article>Search result 1</article>
      </section>
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




