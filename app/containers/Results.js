var React = require('react');
var Article = require('../components/Article');

module.exports = React.createClass({
  setSelected: function(article) {
    this.props.setSelected(article);
  },
  render: function() {
    var results = [];
    var rowNum = 0;
    var self = this;
    for (var i = 0; i < this.props.results.length; i++) {
      var result = this.props.results[i];
      var item = {id:result.id, title:result.fields.headline, thumbnail:result.fields.thumbnail, url:result.webUrl, trailText:result.fields.trailText, date:result.webPublicationDate};
      if (!results[rowNum]) {
        results[rowNum] = new Array(item);
      } else {
        results[rowNum].push(item);
      }
      if (i % 3 === 2) {rowNum++}
    };
    return (
      <div>
        {
          results.map(function(item, i) {
            var articles = item.map(function(article) {
              return <Article key={article.id}
                              title={article.title}
                              thumbnail={article.thumbnail}
                              url={article.url}
                              trailText={article.trailText}
                              date={article.date}
                              setSelected={self.setSelected} />
            });
            return <div key={i}>{articles}</div>;
          })
        }
      </div>
    );
  }
});
