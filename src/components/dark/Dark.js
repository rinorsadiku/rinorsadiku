import React from 'react';
import { SvgReact } from './../Svg';

class Dark extends React.Component {
	render() {
		return (
			<div className="dark">
				<div className="logo">
					<div className="logo__icon"></div>
					<span className="logo__name">Rinor Sadiku</span>
				</div>

				<SvgReact />
			</div>
		);
	}
}

export default Dark;
