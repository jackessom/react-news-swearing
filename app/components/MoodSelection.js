const React = require('react');
const MoodButton = require('../components/MoodButton');

module.exports = React.createClass({
  changeMood: function(mood) {
    this.props.changeMood(mood);
  },
  render: function() {
    return (
      <div>
        <MoodButton setMood={this.changeMood} mood="positive" />
        <MoodButton setMood={this.changeMood} mood="negative" />
        {this.props.mood &&
          <h2>Current mood: {this.props.mood}</h2>
        }
      </div>
    );
  }
});
