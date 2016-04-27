"use strict";
var React = require("react");
var axios = require("axios");
var CommentForm = require("./commentForm");
var Message = require("./message");
var MessageContainer = React.createClass({
  getInitialState: function() {
    return {
      comments: []
    };
  },
  findComments: function(){
    console.log('findComments');
    axios.get("/api/comments/").then(function(res){
      this.setState({comments: res.data});
    }.bind(this));
  },
  render: function() {
    var renderMessage = function(data) {
      if(data == null){
        return "";
      }
      return <Message key={data._id} contents={data.contents} regDate={data.regDate} />;
    }
    return <div>
      {this.state.comments.map(renderMessage, this)}
      <CommentForm refresh={this.findComments} />
    </div>;
  },
  componentDidMount: function() {
    this.findComments();
  }
});
module.exports = MessageContainer;
