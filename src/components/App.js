import '../assets/style.css';

import React from 'react';
import Dark from './dark/Dark';
import Details from './details/Details';
import Light from './light/Light';
import Modal from './modal/Modal';

class App extends React.Component {
	state = {
		animate: false
	}

	setAnimate = () => {
		this.setState({ animate: true });
	}

	render() {
		return (
			<div className="container">
				<Dark />
				<Details animate={this.state.animate} />
				<Light setAnimate={this.setAnimate} />
				<Modal />
			</div>
		);
	}
}

export default App;
