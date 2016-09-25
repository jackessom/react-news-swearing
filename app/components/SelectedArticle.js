var React = require('react');

module.exports = React.createClass({
  render: function() {

    let title, text, date, thumbnail;
    if (this.props.article) {
      title = this.props.article.title;
      text = this.props.article.text;
      thumbnail = this.props.article.thumbnail;

      let tempDate = new Date(this.props.article.date).toString().split(" ");
      date = tempDate[2].toString() + " " + tempDate[1].toString() + " " + tempDate[3].toString();
    }

    return (
      <div>
        <article>
          <div className="half-column">
          <img alt={title} src={thumbnail} />
          </div>
          <div className="half-column">
            <h2>{title}</h2>
            <p>{text}</p>
            <p className="date">{date} | Selected article</p>
          </div>
        </article>
      </div>
    );
  }
});
