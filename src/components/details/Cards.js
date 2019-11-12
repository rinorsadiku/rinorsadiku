import React from 'react';
import {
	SvgPassion,
	SvgIntegrity,
	SvgValue,
	SvgCommitment,
	SvgProblem
} from '../Svg';
import FunctionalityContext from '../../contexts/FunctionalityContext';

class Cards extends React.Component {
	static contextType = FunctionalityContext;

	render() {
		return (
			<div ref={this.context.cards} className="cards">
				<div ref={this.context.passion} className="card card--1">
					<SvgPassion />
					<h4 className="card__title">Passion</h4>
					<p className="card__text">
						The passion that I have for this thing truly trumps
						everything in my life. Just the ability to create
						something out of nothing has lit that fire... and it
						doesn't seem to be going away. The sky really is the
						limit.
					</p>
				</div>
				<div ref={this.context.integrity} className="card card--2">
					<SvgIntegrity />
					<h4 className="card__title">Integrity</h4>
					<p className="card__text">
						If there is one thing that I take pride in, above all,
						is integrity. Being transparent and true to my words,
						truly constructs my pride as someone of service to
						people.
					</p>
				</div>
				<div ref={this.context.value} className="card card--3">
					<SvgValue />
					<h4 className="card__title">Value Based</h4>
					<p className="card__text">
						With every piece of work that I do, I have all but one
						thing in mind "How can this project be as taylor-fit and
						as beneficial to the client as possible?". We do not use
						pre-made templates here, no we don't!
					</p>
				</div>
				<div ref={this.context.commitment} className="card card--4">
					<SvgCommitment />
					<h4 className="card__title">Commitment</h4>
					<p className="card__text">
						Staying on course and learning new things is no easy
						task. Almost everything requires determination, an open
						mind for improvements and most importantly commitment to
						finish what you started.
					</p>
				</div>
				<div ref={this.context.problem} className="card card--5">
					<SvgProblem />
					<h4 className="card__title">Problem Solving</h4>
					<p className="card__text">
						Each project has it's own challenges and trials and
						tribulations to go through that requireds quite the thinking
						out the box and coming up with efficient and scalable
						solutions. That need fortified the problem solving nature as a
						developer.
					</p>
				</div>
			</div>
		);
	}
}

export default Cards;
