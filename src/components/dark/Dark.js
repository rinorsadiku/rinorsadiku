import React from 'react';
import { SvgReact } from './../Svg';
import Particles from 'react-particles-js';
import particlesParams from '../../utils/particlesParams';

import FunctionalityContext from '../../contexts/FunctionalityContext';

class Dark extends React.Component {
	static contextType = FunctionalityContext;

	componentDidMount() {
		this.context.initiateProcess();
	}

	render() {
		return (
			<>
				<div ref={this.context.particlesDiv} className="particles__div">
					<Particles params={particlesParams} className="particles" />
				</div>
				<div className="dark">
					<div className="logo">
						<div
							ref={this.context.logoIcon}
							className="logo__icon"
							onClick={this.context.onLogoClick}
						></div>
						<span
							ref={this.context.logoName}
							className="logo__name"
						>
							Rinor Sadiku
						</span>
					</div>

					<SvgReact />
				</div>
			</>
		);
	}
}

export default Dark;
