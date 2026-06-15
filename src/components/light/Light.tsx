import { useState } from 'react';
import Guide from '../guide/Guide';
import Goo from './Goo';
import MorphedSvgs from './MorphedSvgs';

interface LightProps {
	setAnimate: () => void;
}

const Light = ({ setAnimate }: LightProps) => {
	const [morph, setMorph] = useState(false);

	const toggleMorph = () => setMorph(true);

	const renderGraphic = () => {
		if ('ontouchstart' in window) return <MorphedSvgs morph={morph} />;
		return <Goo show={morph} />;
	};

	return (
		<div className="light">
			<Guide setAnimate={setAnimate} toggleMorph={toggleMorph} />
			{renderGraphic()}
		</div>
	);
};

export default Light;
