import React from 'react';

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

export default Comment;