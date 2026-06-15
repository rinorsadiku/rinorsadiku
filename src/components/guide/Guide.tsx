import { useContext } from 'react';

import FunctionalityContext from '../../contexts/FunctionalityContext';
import GuideCont from './GuideCont';

interface GuideProps {
	setAnimate: () => void;
	toggleMorph: () => void;
}

const Guide = ({ setAnimate, toggleMorph }: GuideProps) => {
	const functionality = useContext(FunctionalityContext);

	return (
		<div ref={functionality.guide} className="guide">
			<input
				type="checkbox"
				className="guide__checkbox"
				id="guide-toggle"
				ref={functionality.guideCheck}
			/>

			<GuideCont setAnimate={setAnimate} toggleMorph={toggleMorph} />
		</div>
	);
};

export default Guide;
