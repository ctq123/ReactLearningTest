import React from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

var CommentBox = React.createClass({
	displayName:'CommentBox',
	render:function(){
		return (
			//React.createElement('div',{className:'commentBox'},"Hello,master!I am a CommentBox.")
			<div className="commentBox">
				<h1>Commets</h1>
				<CommentList data={this.props.data}/>
				<CommentForm />
			</div>
		);
	}
});

export default CommentBox;