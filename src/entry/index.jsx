import '../common/lib';
import App from '../component/App';
import ReactDOM from 'react-dom';
import React from 'react';

import CommentBox from '../component/CommentBox';

//ReactDOM.render(<App />, document.getElementById('react-content'));
//ReactDOM.render(<CommentBox />,document.getElementById('react-content'));
ReactDOM.render(
	React.createElement(CommentBox, null),
	document.getElementById('react-content')
);