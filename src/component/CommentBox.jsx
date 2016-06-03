import React from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

var CommentBox = React.createClass({
	loadCommentsFromServer:function(){
		$.ajax({
			url:this.props.getUrl,
			dataType:'json',
			cache:false,
			success:function(data){
				this.setState({data:data});
			}.bind(this),
			error:function(xhr,status,err){
				console.error(this.props.getUrl, status, err.toString());
			}.bind(this)
		});
	},
	handleCommentSubmit:function(comment){
		$.ajax({
			url:this.props.postUrl,
			dataType:'json',
			type:'POST',
			data:comment,
			success:function(data){
				this.setState({data:data});
			}.bind(this),
			error:function(xhr,status,err){
				console.error(this.props.postUrl, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState:function(){
		return {
			data:[]
		};
	},
	//异步请求数据渲染
	componentDidMount:function(){
		this.loadCommentsFromServer();
		//setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
	render:function(){
		return (
			//React.createElement('div',{className:'commentBox'},"Hello,master!I am a CommentBox.")
			<div className="commentBox">
				<h1>Commets</h1>
				<CommentList data={this.state.data} />
				<CommentForm onCommentSubmit={this.handleCommentSubmit}/>
			</div>
		);
	}
});

export default CommentBox;