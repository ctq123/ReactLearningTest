import React from 'react';

var SetIntervalMixin = {
	componentDidMount:function(){
		this.intervals = [];
		console.log("SetIntervalMixin:componentDidMount");
	},
	setMyInterval:function(){
		this.intervals.push(setInterval.apply(null, arguments));
	},
	componetWillUnmount:function(){//在组件从 DOM 中移除的时候立刻被调用
		this.intervals.map(clearInterval);
	},
};

var TickTock = React.createClass({
	//mixins中定义公共功能，它们与父组件的关系是互相补充关系，并不会相互覆盖
	//执行顺序：先执行mixins内方法（如SetIntervalMixin:componentDidMount），然后执行组件内方法（如TickTock:componentDidMount）
	//适用场合：组件销毁资源清理操作
	mixins: [SetIntervalMixin],//引用mixin
	getInitialState:function() {
		return {seconds:0};
	},
	componentDidMount:function() {
		console.log("TickTock:componentDidMount");
		this.setMyInterval(this.tick, 1000);//调用mixin的方法
		this.intervals.forEach(function(data){
			console.log("this.intervals data="+data);
		});	
	},
	tick:function() {
		this.setState({
			seconds: this.state.seconds + 1,
		});
	},
	render:function(){
		return (
			<p>
				React has been running for {this.state.seconds} seconds.
			</p>
		);
	},
});


export default TickTock;