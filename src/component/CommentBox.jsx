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
	handleFormSubmit:function(comment){
		console.log("start handleFormSubmit");
		var form = document.createElement("form");
 		form.action = this.props.postUrl;
 		form.method = "post";
 		form.style.display = "none";
 		console.log("create form");
 		for(var value in comment){
 			var textarea = document.createElement("textarea");
 			textarea.name = value;
 			console.log("textarea.name:"+textarea.name);
 			textarea.value = comment[value];
 			console.log("textarea.value:"+textarea.value);
 			form.appendChild(textarea);
 		}
 		console.log("create body");
 		document.body.appendChild(form);
 		console.log("created body");
 		form.submit(function(data){console.log("data:"+data);this.setState({data:data});});
 		console.log("form.submit");
 		// return form;
	},
	handleCommentSubmit:function(comment){
		// //优化更新顺序,将最新的评论放在前
		// var oldComents = this.state.data;
		// var comments = oldComents.concat([comment]);
		// this.setState({data:comments});
		console.log(JSON.stringify(comment));
		//console.log("comment.author:"+comment.author);
		//console.log("comment.content:"+comment.content);
		// var xmlHttp;
		// if(window.ActiveXObject){  
 	// 		xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");  
 	// 	}else {  
 	// 		xmlHttp=new XMLHttpRequest();  
 	// 	}
 	// 	xmlHttp.open("POST",this.props.postUrl,true);
 	// 	xmlHttp.setRequestHeader("Content-Type","application/json");
 	// 	xmlHttp.setRequestHeader("Access-Control-Allow-Origin","*");
 	// 	xmlHttp.onreadystatechange = reSetState;  
 	// 	xmlHttp.send(comment);//发送参数 

 	// 	function reSetState(){
 	// 		var data=xmlHttp.responseText;
 	// 		console.log("data="+data);
		// 	// this.setState({data:data});
 	// 	}
 	// 	
 		this.handleFormSubmit(comment);
 		
 		

		// $.ajax({
		// 	type:'POST',
		// 	url:this.props.postUrl,
		// 	contentType:'application/json',
		// 	data:comment,
		// 	dataType:'json',
		// 	beforeSend:function(xhr){
		// 		console.log("xhr="+xhr);
		// 		//xhr.setRequestHeader("Access-Control-Allow-Origin","*");
		// 	},
		// 	success:function(data){
		// 		console.log("data="+data);
		// 		this.setState({data:data});
		// 	}.bind(this),
		// 	error:function(xhr,status,err){
		// 		// console.error(this.props.postUrl, status, err.toString());
		// 	}.bind(this)
		// });
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