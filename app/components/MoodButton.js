const React = require('react');

module.exports = React.createClass({
  handleClick: function(e) {
    e.preventDefault();
    this.props.setMood(this.props.mood);
  },
  render: function() {
    return (
      <button onClick={this.handleClick}>
        {this.props.mood}
      </button>
    );
  }
});
