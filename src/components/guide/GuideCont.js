import React from 'react';

import { SvgGraphic } from './../Svg';

class GuideContainer extends React.Component {
	render() {
		return (
			<div className="guide__cont">
				<div className="guide__nav">
					<span>Guide</span>
				</div>

				<h3 className="guide__header heading-3--cartoon">Movement</h3>

				<div className="guide__content guide__content--small">
					<p className="guide__text paragraph">
						The guide seems to be on the bright side. <br />
						Not a lot of movement huh?
					</p>

					<button class="guide__btn btn">Let's fix that</button>

					<div className="guide__circles">
						<div className="guide__circle guide__circle--active"></div>
						<div className="guide__circle"></div>
						<div className="guide__circle"></div>
					</div>
				</div>
				<SvgGraphic />
			</div>
		);
	}
}

export default GuideContainer;
