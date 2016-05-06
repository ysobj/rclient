"use strict";
var React = require("react");
var Message = React.createClass({
  getDefaultProps: function(){
    return {};
  },
  render: function(){
    var data = this.props;
    return (
      <div className="message-container">
        <div className="message-body">
          <div className="avatar"><img alt="avatar" src='http://www.gravatar.com/avatar/13f5b1351a04db4c83e60fcf7fb6d6ae?rating=PG&size=50&default=wavatar'/></div>
          <div>
            <div className="comment-info"><span>ysobj</span><span>{data.regDate}</span></div>
            <div className="comment-body">{data.contents}</div>
          </div>
        </div>
      </div>);
  }
});
module.exports = Message;
