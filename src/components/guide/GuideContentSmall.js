import React from 'react';

import FunctionalityContext from '../../contexts/FunctionalityContext';

class GuideContentSmall extends React.Component {
	static contextType = FunctionalityContext;

	render() {
		const { text, button } = this.props.content;

		return (
			<>
				<p
					ref={this.context.guideText}
					className="guide__text paragraph"
				>
					{text}
				</p>

				<button
					onClick={() => this.props.handleChange()}
					className="guide__btn btn"
					ref={this.context.guideButton}
				>
					{button}
				</button>

				<div ref={this.context.guideCircles} className="guide__circles">
					<div
						onClick={() => this.props.handleChange(1)}
						className="guide__circle guide__circle--active"
					></div>
					<div
						onClick={() => this.props.handleChange(2)}
						className="guide__circle"
					></div>
					<div
						onClick={() => this.props.handleChange(3)}
						className="guide__circle"
					></div>
				</div>
			</>
		);
	}
}

export default GuideContentSmall;
