import React from 'react';

import FunctionalityContext from '../../contexts/FunctionalityContext';
import GuideCont from './GuideCont';

class Guide extends React.Component {
	static contextType = FunctionalityContext;

	render() {
		return (
			<div ref={this.context.guide} className="guide">
				<input
					type="checkbox"
					className="guide__checkbox"
					id="guide-toggle"
					ref={this.context.guideCheck}
				/>

				<GuideCont setAnimate={this.props.setAnimate} toggleMorph={this.props.toggleMorph} />
			</div>
		);
	}
}

export default Guide;
