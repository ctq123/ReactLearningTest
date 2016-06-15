import React from 'react';

var FancyDiv = React.createClass({
	render:function() {
		var {title, color, ...other} = this.props;
		return (
			<div style={{color}}>
				{title} is OutContainer.
				<p>
					<FancyCheckBox {...other} title={title} />
					{
						// 若使用<FancyCheckBox {...other} />会出错，title已经解析出来了，...other中不包含title了，
						// 若要继续传下去需要重新赋值，注意顺序
					}
				</p>
			</div>
		);
	},
});

var FancyCheckBox = React.createClass({
	getInitialState:function() {
		return {
			checked: false,
		};
	},
	handleChange:function(event) {
		this.setState({
			checked: !this.state.checked,
		});
	},
	render:function() {
		var {title, ...other} = this.props;
		var border = this.state.checked ? '1px solid red' : '1px solid blue';
		var fancyContent = this.state.checked ? title + ' is selected.' : title + ' is not selected.';
		return (
			<label>
				<input
					checked = {this.state.checked}
					onChange = {this.handleChange}
					type = "checkbox"
				/>
				<span style = {{border}}>
					{fancyContent}
				</span>
			</label>
		);
	},
});

export default FancyDiv;