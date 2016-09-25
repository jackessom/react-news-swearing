var React = require('react');

module.exports = React.createClass({
  handleClick: function(e) {
    e.preventDefault();
    this.props.setSelected({title:this.props.title, text:this.props.trailText, date:this.props.date, thumbnail:this.props.thumbnail});
  },
  render: function() {
    return (
      <a href={this.props.url}  className='article' onClick={this.handleClick}>
        <article>
          <img alt={this.props.title} src={this.props.thumbnail} />
          <p>{this.props.title}</p>
        </article>
      </a>
    );
  }
});
