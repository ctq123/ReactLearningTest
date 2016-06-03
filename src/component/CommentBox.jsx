import React from 'react';

var CommentBox = React.createClass({
	displayName:'CommentBox',
	render:function(){
		return (
			//React.createElement('div',{className:'commentBox'},"Hello,master!I am a CommentBox.")
			<div className="commentBox">
				<h1>Commets</h1>
				<CommentList />
				<CommentForm />
			</div>
		);
	}
});

var CommentList = React.createClass({
	render:function(){
		return (
			<div className="commentList">
				<Comment author="Pete Hunt">This is one comment</Comment>
				<Comment author="Jordan Walke">This is *another* comment</Comment>
			</div>
		);
	}
});

var CommentForm = React.createClass({
	render:function(){
		return (
			<div className="commentForm">
				Hello,world! I am a commentForm.
			</div>
		);
	}
});

var Comment = React.createClass({
	render:function(){
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					父类传进来的author属性为：
					{this.props.author}
				</h2>
				父类传进来的内容属性为：
				{this.props.children}
			</div>
		);
	}
});


export default CommentBox;