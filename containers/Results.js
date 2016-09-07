var React = require('react');
var Article = require('../components/Article');

module.exports = React.createClass({
  render: function() {
    var articles = [];
    for (var i = 0; i < this.props.results.length; i++) {
      articles.push(this.props.results[i]);
    };

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
