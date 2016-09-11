var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {selected: false};
  },
  handleClick: function(e) {
    e.preventDefault();
    this.setState({selected: !this.state.selected});
  },
  render: function() {
    const selectedClass = this.state.selected ? 'selected' : '';
    return (
      <a href={this.props.url}  className={'article ' + selectedClass} onClick={this.handleClick}>
        <article>
          <img alt={this.props.title} src={this.props.thumbnail} />
          <h2>{this.props.title}</h2>
        </article>
      </a>
    );
  }
});
