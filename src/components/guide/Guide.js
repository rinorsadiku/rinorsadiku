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

				<label
					ref={this.context.guideToggle}
					onClick={this.context.toggleGuide}
					className="guide__toggle"
					htmlFor="guide-toggle"
				>
					<span className="guide__toggle-icon">&nbsp;</span>
				</label>

				<GuideCont />
			</div>
		);
	}
}

export default Guide;
