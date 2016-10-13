var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      id:this.props.article.id,
      title:this.props.article.fields.headline,
      thumbnail:this.props.article.fields.thumbnail,
      url:this.props.article.webUrl,
      trailText:this.props.article.fields.trailText,
      date:this.props.article.webPublicationDate
    };
  },
  handleClick: function(e) {
    e.preventDefault();
    this.props.setSelected({title:this.state.title, text:this.state.trailText, date:this.state.date, thumbnail:this.state.thumbnail});
  },
  render: function() {
    return (
      <a href={this.state.url}  className='article' onClick={this.handleClick}>
        <article>
          <img alt={this.state.title} src={this.state.thumbnail} />
          <p>{this.state.title}</p>
        </article>
      </a>
    );
  }
});
