var React = require('react');

module.exports = React.createClass({
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
