import '../common/lib';
import App from '../component/App';
import ReactDOM from 'react-dom';
import React from 'react';

import CommentBox from '../component/CommentBox';
import JsonDataD from '../data/JsonData';

//ReactDOM.render(<App />, document.getElementById('react-content'));
//ReactDOM.render(<CommentBox />,document.getElementById('react-content'));
ReactDOM.render(
	React.createElement(CommentBox, {url:'http://rap.taobao.org/mockjs/4355/getCommentsData?'}),
	//<CommentBox url=" http://rap.taobao.org/mockjs/4355/getCommentsData?" pollInterval={2000} />,
	document.getElementById('react-content')
);