import '../common/lib';
import App from '../component/App';
import ReactDOM from 'react-dom';
import React from 'react';

import CommentBox from '../component/CommentBox';
import JsonDataD from '../data/JsonData';

//ReactDOM.render(<App />, document.getElementById('react-content'));
//ReactDOM.render(<CommentBox />,document.getElementById('react-content'));
ReactDOM.render(
	React.createElement(CommentBox, {data:JsonDataD}),
	document.getElementById('react-content')
);