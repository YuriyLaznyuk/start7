import React, {ReactElement} from 'react';
import './app.scss';
import BatchingExample from './example/BatchingExample';
import Concurrent from './example/Concurrent';

const App = (): ReactElement => {
	return (
		<div>
			<h1 className='app'>Hello World !!!</h1>
			<BatchingExample />
			<Concurrent />
		</div>
	);
};

export default App;
