import '../common/lib';
import App from '../component/App';
import ReactDOM from 'react-dom';
import React from 'react';

import CommentBox from '../component/CommentBox';
import JsonData_Comments from '../data/JsonData_Comments';

import FilterableProductTable from '../component/FilterableProductTable';
import JsonData_Products from '../data/JsonData_Products';

//pollInterval={2000} 
//ReactDOM.render(<App />, document.getElementById('react-content'));
//ReactDOM.render(<CommentBox />,document.getElementById('react-content'));
// ReactDOM.render(
// 	//React.createElement(CommentBox, {url:'http://rap.taobao.org/mockjs/4355/getCommentsData?'}),
// 	<CommentBox 
// 		getUrl="http://rap.taobao.org/mockjs/4355/getCommentsData"
// 		postUrl="http://rap.taobao.org/mockjs/4355/replayComment"
// 	 />,
// 	document.getElementById('react-content')
// );

ReactDOM.render(
	// React.createElement(FilterableProductTable, {products:JsonData_Products}),
	<FilterableProductTable 
		getUrl="http://localhost/SpringSecurityTestProject/test/getList"
	 />,
	document.getElementById('react-content')
);