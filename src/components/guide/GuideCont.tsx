import { useContext, useState } from 'react';

import GuideContentSmall from './GuideContentSmall';
import GuideContentLarge from './GuideContentLarge';

import FunctionalityContext from '../../contexts/FunctionalityContext';
import guideContent from '../../utils/guideContent';

import { SvgGraphicSmall, SvgGraphicLarge } from '../Svg';

interface GuideContProps {
	setAnimate: () => void;
	toggleMorph: () => void;
}

const GuideCont = ({ setAnimate, toggleMorph }: GuideContProps) => {
	const functionality = useContext(FunctionalityContext);

	const [content, setContent] = useState(guideContent[0]);
	const [clicked, setClicked] = useState(1);
	const [large, setLarge] = useState(false);

	const enlargeGuide = () => {
		// Here we'll add the code to enlarge the guide

		// 1) Disappear content
		functionality.disappear(functionality.guideContent);

		// 2) Enlarge Guide
		functionality.enlargeGuide();

		// 3) Change content and svg by switching state
		setLarge(true);

		// 4) Reappear content
		functionality.appear(functionality.guideContent);
	};

	const animateCartoon = () => {
		if (clicked > 1) return;

		// Set the animation to true
		setAnimate();

		// Invoke the function in the functionality class to animate the cartoon
		functionality.animateCartoon(true);

		setClicked(2);
	};

	const handleChange = async (index?: number) => {
		let nextIndex: number;
		if (index === undefined) {
			nextIndex = guideContent.indexOf(content) + 1;
		} else {
			nextIndex = index - 1;
		}

		// Here we'll add the conditional to check if the index is 3
		// If it is then enlarge guide and return

		// eslint-disable-next-line default-case
		switch (nextIndex) {
			case 1:
				toggleMorph();
				break;
			case 2:
				animateCartoon();
				break;
			case 3:
				return enlargeGuide();
		}

		const { guideHeader, guideButton, guideText } = functionality;

		await functionality.disappear(guideHeader, guideButton, guideText);

		// Change the active circle
		functionality.activeCircle(nextIndex);

		// Set the new state with the new data
		setContent(guideContent[nextIndex]);
		await functionality.appear(guideHeader, guideButton, guideText);
	};

	const toggleGuide = async () => {
		// Toggle Guide
		await functionality.toggleGuide();

		if (large) {
			setLarge(false);
			handleChange(3);
		}
	};

	const renderContent = () => {
		if (!large) {
			return (
				<GuideContentSmall
					handleChange={handleChange}
					content={content}
				/>
			);
		}

		return <GuideContentLarge />;
	};

	const renderSVG = () => {
		if (!large) {
			return <SvgGraphicSmall />;
		}

		return <SvgGraphicLarge />;
	};

	return (
		<>
			<label
				ref={functionality.guideToggle}
				onClick={toggleGuide}
				className="guide__toggle"
				htmlFor="guide-toggle"
			>
				<span className="guide__toggle-icon">&nbsp;</span>
			</label>

			<div ref={functionality.guideCont} className="guide__cont">
				<div className="guide__nav">
					<span>Guide</span>
				</div>

				<h3
					ref={functionality.guideHeader}
					className="guide__header heading-3--cartoon"
				>
					{content.header}
				</h3>
				<div
					ref={functionality.guideContent}
					className="guide__content guide__content--small"
				>
					{renderContent()}
				</div>

				{renderSVG()}
			</div>
		</>
	);
};

export default GuideCont;
