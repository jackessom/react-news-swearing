var React = require('react');
var SearchResultItem = require('../components/SearchResultItem');

module.exports = React.createClass({
  setSelected: function(article) {
    this.props.setSelected(article);
  },
  render: function() {
    const self = this;
    const results = this.props.results.map(function(article, i){
      return <SearchResultItem key={i} article={article} setSelected={self.setSelected} />;
    });
    return  <div>{ results }</div>
  }
});
