import '../assets/style.css';

import React from 'react';
import Dark from './dark/Dark';
import Details from './details/Details';
import Light from './light/Light';
import Modal from './modal/Modal';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Dark />
				<Details />
				<Light />
				<Modal />
			</div>
		);
	}
}

export default App;
