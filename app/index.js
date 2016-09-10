var React = require('react');
var ReactDOM = require('react-dom');
var SearchContainer = require('./containers/SearchContainer');

require('./main.scss');

ReactDOM.render(<SearchContainer />, document.getElementById('container'));
