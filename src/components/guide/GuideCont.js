import React from 'react';

import GuideContentSmall from './GuideContentSmall';
import GuideContentLarge from './GuideContentLarge';

import FunctionalityContext from '../../contexts/FunctionalityContext';
import guideContent from '../../utils/guideContent';

import { SvgGraphicSmall, SvgGraphicLarge } from './../Svg';

class GuideContainer extends React.Component {
	static contextType = FunctionalityContext;

	state = {
		content: guideContent[0],
		large: false
	};

	enlargeGuide = () => {
		// Here we'll add the code to enlarge the guide

		// 1) Disappear content
		this.context.disappear(this.context.guideContent);

		// 2) Enlarge Guide
		this.context.enlargeGuide();

		// 3) Change content and svg by switching state
		this.setState({ large: true }, () => {
			// 4) Reappear content
			this.context.appear(this.context.guideContent);
		});
	};

	handleChange = (index = null) => {
		if (index === null) {
			index = guideContent.indexOf(this.state.content) + 1;
		} else {
			index--;
		}

		// Here we'll add the conditional to check if the index is 3
		// If it is then enlarge guide and return

		// eslint-disable-next-line default-case
		switch (index) {
			case 3:
				return this.enlargeGuide();
		}

		const { guideHeader, guideButton, guideText } = this.context;

		this.context.disappear(guideHeader, guideButton, guideText);

		// Change the active circle
		this.context.activeCircle(index);

		// Set the new state with the new data
		this.setState({ content: guideContent[index] }, () =>
			this.context.appear(guideHeader, guideButton, guideText)
		);
	};

	renderContent = () => {
		if (!this.state.large) {
			return (
				<GuideContentSmall
					handleChange={this.handleChange}
					content={this.state.content}
				/>
			);
		}

		return <GuideContentLarge />;
	};

	renderSVG = () => {
		if (!this.state.large) {
			return <SvgGraphicSmall />;
		}

		return <SvgGraphicLarge />;
	};

	render() {
		const { header } = this.state.content;

		return (
			<div ref={this.context.guideCont} className="guide__cont">
				<div className="guide__nav">
					<span>Guide</span>
				</div>

				<h3
					ref={this.context.guideHeader}
					className="guide__header heading-3--cartoon"
				>
					{header}
				</h3>
				<div
					ref={this.context.guideContent}
					className="guide__content guide__content--small"
				>
					{this.renderContent()}
				</div>

				{this.renderSVG()}
			</div>
		);
	}
}

export default GuideContainer;
