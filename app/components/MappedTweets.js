const React = require('react');
const Twitter = require('twitter');
const MoodSelection = require('../components/MoodSelection');

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

module.exports = React.createClass({
  getInitialState: function() {
    return {mood: null, tweets: null};
  },
  componentDidMount: function() {
    this.searchTwitter(this.props.title.replace(/ /g, " "));
  },
  componentWillReceiveProps: function(nextProps) {
    this.searchTwitter(nextProps.title.replace(/ /g, " "));
  },
  searchTwitter: function(query) {
    client.get('search/tweets', {q: query, lang: 'en'}, (error, tweets, response) => {
      if(error) throw error;
      this.setState({tweets: tweets.statuses});
    });
  },
  changeMood: function(mood) {
    this.setState({mood: mood});
  },
  render: function() {

    let tweets;
    if (this.state.tweets) {
      tweets = this.state.tweets.map(function(tweet, i){
        return <p key={i}>{tweet.text}</p>;
      });
    }

    return (
      <div>
        <section>
          <div>
            <MoodSelection mood={this.state.mood} changeMood={this.changeMood} />
          </div>
        </section>
        <section>
          {this.state.tweets &&
            <div>{tweets}</div>
          }
        </section>
      </div>
    );
  }
});
