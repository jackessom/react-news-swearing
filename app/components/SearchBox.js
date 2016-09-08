var React = require('react');
var DebounceInput = require('react-debounce-input');

module.exports = React.createClass({
  getInitialState: function() {
    return {searchTerm: ''};
  },
  handleChange: function(e) {
    this.setState({searchTerm: e.target.value});
    this.props.onSearch(e.target.value);
  },
  render: function() {
    return (
      <DebounceInput
          minLength={2}
          debounceTimeout={300}
          onChange={this.handleChange}
          placeholder="Search the news" />
    );
  }
});
