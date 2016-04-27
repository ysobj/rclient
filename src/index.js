$ = jQuery = require('jquery');
require('bootstrap');
var React = require('react');
var ReactDom = require('react-dom');

var root = document.getElementById('root');
var MessageContainer = require('./messagecontainer');
ReactDom.render(React.createElement(MessageContainer), root);
