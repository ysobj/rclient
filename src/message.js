"use strict";
var React = require("react");
var axios = require("axios");
var Message = React.createClass({
  getInitialState: function() {
    return {
      comments: []
    };
  },
  render: function() {
        var renderMessage = function(data) {
          if(data == null){
            return "";
          }
                  return (
      <div>
        <div className="message-container">
          <div className="avatar"><img alt="avatar" src='http://www.gravatar.com/avatar/13f5b1351a04db4c83e60fcf7fb6d6ae?rating=PG&size=50&default=wavatar'/></div>
          <div className="comment-info"><div>ysobj</div>3/11 12:40</div></div>
        <div>{data.contents}</div>
      </div>
                    );
                }
    return <div>
      {this.state.comments.map(renderMessage, this)}
    </div>;
  },
  componentDidMount: function() {
    axios.get("/api/comments/").then(function(res){
      this.setState({comments: res.data});
    }.bind(this));
  }
});
module.exports = Message;
