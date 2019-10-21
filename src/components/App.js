import React from 'react';
import '../assets/style.css';
import Dark from './dark/Dark';
import Particles from './dark/Particles';
import Details from './details/Details';
import Light from './light/Light';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Particles />
				<Dark />
				<Details />
				<Light />
			</div>
		);
	}
}

export default App;
