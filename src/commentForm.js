"use strict";
var React = require("react");
var ReactDom = require("react-dom");
var axios = require("axios");
var CommentForm = React.createClass({
  handleClickSend: function() {
    var comment = ReactDom.findDOMNode(this.refs.comment).value;
    socket.emit('chat message',comment);
    /*
    axios.post("/api/comments/",{
      contents: comment,
      regDate: new Date(),
      userId: 1
    }).then(function(response){
      this.props.refresh()
    }.bind(this));
    */
  },
  render: function(){
    return <form className="form-horizontal" action="../users">
        <div className="form-group">
          <label htmlFor="inputComment" className="col-lg-2 control-label">Comment</label>
          <div className="col-lg-6">
            <input ref="comment" type="text" className="form-control" id="inputComment" placeholder="Comment"></input>
          </div>
          <span onClick={this.handleClickSend} className="btn btn-primary">send</span>
        </div>
      </form>
  }
});
module.exports = CommentForm;
