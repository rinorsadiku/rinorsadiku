import React from 'react';
import Guide from '../guide/Guide';
import { SvgTriangle, SvgRectangle, SvgCircle } from './../Svg';

const Light = () => {
	return (
		<div className="light">
			<Guide />
			<SvgTriangle />
			<SvgRectangle />
			<SvgCircle />
		</div>
	);
};

export default Light;
