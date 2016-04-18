$ = jQuery = require('jquery');
require('bootstrap');
var React = require('react');
var ReactDom = require('react-dom');

var root = document.getElementById('root');
var Message = require('./message');
ReactDom.render(React.createElement(Message), root);
