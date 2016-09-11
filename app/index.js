var React = require('react');
var ReactDOM = require('react-dom');
var SearchContainer = require('./containers/SearchContainer');

require('./styles/main.scss');

ReactDOM.render(<SearchContainer />, document.getElementById('app'));
