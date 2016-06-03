import React from 'react';

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

var CommentList = React.createClass({
	render:function(){
		var commentNodes = this.props.data.map(function(comment){
			return (
				<Comment author={comment.author}>
					{comment.text}
				</Comment>
			);
		});

		return (
			<div className="commentList">
				{commentNodes}
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
					{	
						//读取父类传进来的author属性
					}
					{this.props.author}
				</h2>
				{	
					//读取父类传进来的内容属性
				}
				{this.props.children}
			</div>
		);
	}
});


export default CommentBox;