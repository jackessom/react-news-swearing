var React = require('react');
var Article = require('../components/Article');

module.exports = React.createClass({
  render: function() {
    var results = [];
    var rowNum = 0;
    for (var i = 0; i < this.props.results.length; i++) {
      var result = this.props.results[i];
      var item = {id:result.id, title:result.fields.headline, thumbnail:result.fields.thumbnail, url:result.webUrl};
      if (!results[rowNum]) {
        results[rowNum] = new Array(item);
      } else {
        results[rowNum].push(item);
      }
      if (i % 3 === 2) {rowNum++}
    };
    return (
      <section>
        <h2>Select an article</h2>
        {
          results.map(function(item, i) {
            var articles = item.map(function(article) {
              return <Article key={article.id}
                              title={article.title}
                              thumbnail={article.thumbnail}
                              url={article.url} />
            });
            return <div key={i}>{articles}</div>;
          })
        }
      </section>
    );
  }
});
