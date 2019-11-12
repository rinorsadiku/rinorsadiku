import React from 'react';
import Guide from '../guide/Guide';
import Goo from './Goo';
import MorphedSvgs from './MorphedSvgs';

class Light extends React.Component {
	state = {
		morph: false
	};

	toggleMorph = () => {
		this.setState({ morph: true });
	};

	renderGraphic = () => {
		if ('ontouchstart' in window)
			return <MorphedSvgs morph={this.state.morph} />;
		return <Goo show={this.state.morph} />;
		// if ('ontouchstart' in window) return <p>I am an ipad</p>;
		// return <p>Im a laptop</p>;
	};

	render() {
		return (
			<div className="light">
				<Guide setAnimate={this.props.setAnimate} toggleMorph={this.toggleMorph} />
				{this.renderGraphic()}
			</div>
		);
	}
}

export default Light;
