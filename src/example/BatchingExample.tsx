import React, {useState} from 'react';
// import {flushSync} from 'react-dom';

const BatchingExample = () => {
	const [state, setState] = useState(0);
	const [value, setValue] = useState(0);
	console.log('render');
	const update = () => {
		setTimeout(() => {
			setValue((prev) => prev + 1);
			// setState((prev) => prev + 1);
			setState(state + 1);

			// flushSync(() => {
			// 	setValue((prev) => prev + 1);
			// });
			//
			// flushSync(() => {
			// 	setState(state + 1);
			// });
		}, 1000);
	};
	return (
		<div>
			<h1>VALUE {value}</h1>
			<h1>STATE {state}</h1>
			<button onClick={update}>UPDATE</button>
		</div>
	);
};

export default BatchingExample;
