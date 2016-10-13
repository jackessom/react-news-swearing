var React = require('react');
var ReactDOM = require('react-dom');
var Container = require('./containers/Container');

require('./styles/main.scss');

ReactDOM.render(<Container />, document.getElementById('app'));
