var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./commentBox');

ReactDOM.render(
    <CommentBox url="/product"/>,
    document.getElementById('content')
 );