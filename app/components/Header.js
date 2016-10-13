const React = require('react');
const Search = require('../components/Search');

module.exports = React.createClass({
  setSelected: function(article) {
    this.props.setSelected(article);
  },
  render: function() {
    return (
      <section>
        <div>
          <div className="half-column">
            <h1>Search the news and see who&#39;s not F***ing happy about it</h1>
            <p>Search for some news and click to select an article.</p>
          </div>
          <div className="half-column">
            <Search setSelected={this.setSelected} />
          </div>
        </div>
      </section>
    );
  }
});
