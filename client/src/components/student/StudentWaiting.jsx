import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="waiting waiting-text">
        {this.props.sharingAllThumbsCheckResults || this.props.shareThumbsCheckResults ? null : <div>You are connected. Please wait for the prompt.</div>}
      </div>
    );
  }
});
