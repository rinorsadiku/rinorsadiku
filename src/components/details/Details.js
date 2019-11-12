import React from 'react';
import Cartoon from './Cartoon';
import Cards from './Cards';

class Details extends React.Component {
	render() {
		return (
			<div className="details">
				<h1 className="name">
					<span className="heading-1--chalk">Rinor</span>
					<span className="heading-1--cartoon">Sadiku</span>
				</h1>
				<h2 className="position">
					<span className="heading-2--chalk">Full-Stack</span>
					<span className="heading-2--cartoon">Developer</span>
				</h2>
				<Cards />
				<Cartoon animate={this.props.animate} />
			</div>
		);
	}
};

export default Details;
