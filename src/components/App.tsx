import '../assets/style.css';

import { useState } from 'react';
import Dark from './dark/Dark';
import Details from './details/Details';
import Light from './light/Light';
import Modal from './modal/Modal';

const App = () => {
	const [animate, setAnimate] = useState(false);

	const enableAnimate = () => setAnimate(true);

	return (
		<div className="container">
			<Dark />
			<Details animate={animate} />
			<Light setAnimate={enableAnimate} />
			<Modal />
		</div>
	);
};

export default App;
