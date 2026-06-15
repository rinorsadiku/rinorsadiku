import { useContext } from 'react';

import FunctionalityContext from '../../contexts/FunctionalityContext';
import { type GuideSlide } from '../../utils/guideContent';

interface GuideContentSmallProps {
	content: GuideSlide;
	handleChange: (index?: number) => void;
}

const GuideContentSmall = ({
	content,
	handleChange
}: GuideContentSmallProps) => {
	const functionality = useContext(FunctionalityContext);
	const { text, button } = content;

	return (
		<>
			<p ref={functionality.guideText} className="guide__text paragraph">
				{text}
			</p>

			<button
				onClick={() => handleChange()}
				className="guide__btn btn"
				ref={functionality.guideButton}
			>
				{button}
			</button>

			<div ref={functionality.guideCircles} className="guide__circles">
				<div
					onClick={() => handleChange(1)}
					className="guide__circle guide__circle--active"
				></div>
				<div
					onClick={() => handleChange(2)}
					className="guide__circle"
				></div>
				<div
					onClick={() => handleChange(3)}
					className="guide__circle"
				></div>
			</div>
		</>
	);
};

export default GuideContentSmall;
