import React from 'react';

import GuideCont from './GuideCont';

class Guide extends React.Component {
	render() {
		return (
			<div className="guide">
				<input
					type="checkbox"
					className="guide__checkbox"
					id="guide-toggle"
				/>

				<label className="guide__toggle" for="guide-toggle">
					<span className="guide__toggle-icon">&nbsp;</span>
				</label>

				<GuideCont />
			</div>
		);
	}
}

export default Guide;
