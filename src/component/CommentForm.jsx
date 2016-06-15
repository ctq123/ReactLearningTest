import React from 'react';

var CommentForm = React.createClass({
	handleSubmit:function(e){
		e.preventDefault();
		var author = this.refs.author.value.trim();
		var content = this.refs.content.value.trim();
		if(!content||!author){
			return;
		}
		this.props.onCommentSubmit({id:2,author:author, content:content});
		this.refs.author.value = '';
		this.refs.content.value = '';
		return;
	},
	render:function(){
		return (
			<form className="commentForm" onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Your name" ref="author"/>
				<br/>
				<input type="text" placeholder="Say something..." ref="content"/>
				<br/>
				<input type="submit" value="submit"/>
			</form>
		);
	}
});

export default CommentForm;