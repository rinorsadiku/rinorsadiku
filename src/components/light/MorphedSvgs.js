import React from 'react';
import { SvgTriangle, SvgRectangle, SvgCircle } from '../Svg';

class MorphedSvgs extends React.Component {
	render() {
		return (
			<>
				<SvgTriangle morph={this.props.morph} />
				<SvgRectangle morph={this.props.morph} />
				<SvgCircle morph={this.props.morph} />
			</>
		);
	}
}

export default MorphedSvgs;
