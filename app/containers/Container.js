const React = require('react');
const Search = require('../components/Search');
const SelectedArticle = require('../components/SelectedArticle');
const MappedTweets = require('../components/MappedTweets');
const Header = require('../components/Header');

module.exports = React.createClass({
  getInitialState: function() {
    return {selectedArticle: null};
  },
  setSelected: function(article) {
    this.setState({selectedArticle: article});
  },
  render: function() {
    return (
      <div>

        <Header setSelected={this.setSelected} />

        <section className="select-article">
          {this.state.selectedArticle ?
              <SelectedArticle article={this.state.selectedArticle} />:
             <div><h2>You haven&#39;t selected an article yet.</h2></div>
          }
        </section>

        {this.state.selectedArticle &&
          <MappedTweets title={this.state.selectedArticle.title} />
        }

      </div>
    );
  }
});
