"use strict";
var React = require("react");
var Message = React.createClass({
  render: function() {
        var renderMessage = function() {
                  return (
      <div>
        <div className="message-container">
          <div className="avatar"><img alt="avatar" src='http://www.gravatar.com/avatar/13f5b1351a04db4c83e60fcf7fb6d6ae?rating=PG&size=50&default=wavatar'/></div>
          <div className="comment-info"><div>ysobj</div>3/11 12:40</div></div>
        <div>いろはにほへと ちりぬぬを</div>
      </div>
                    );
                }
    return <div>
      {renderMessage()}
      {renderMessage()}
    </div>;
  }
});
module.exports = Message;
