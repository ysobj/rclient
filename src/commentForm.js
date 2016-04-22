"use strict";
var React = require("react");
var axios = require("axios");
var CommentForm = React.createClass({
  handleClickSend: function() {
    console.log("onClick!(CommentForm)");
  },
  render: function(){
    return <form className="form-horizontal" action="../users">
        <div className="form-group">
          <label htmlFor="inputComment" className="col-lg-2 control-label">Comment</label>
          <div className="col-lg-6">
            <input type="text" className="form-control" id="inputComment" placeholder="Comment"></input>
          </div>
          <span onClick={this.handleClickSend} className="btn btn-primary">send</span>
        </div>
      </form>
  }
});
module.exports = CommentForm;
