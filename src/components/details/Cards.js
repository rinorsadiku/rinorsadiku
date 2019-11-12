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
						The passion for this thing truly trumps
						everything in my life. The sky really is the limit when it comes to
						development and having practiced this craft, and still doing so,
						certainly gave me the ability of putting forth
						the best product and solution to everyone.
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
						Staying on course and continually getting better is no easy
						task. Being commited to what you once made a decision is truly a must,
						and having that sort of discipline in the bag is one of the things
						that I certainly take pride in.
					</p>
				</div>
				<div ref={this.context.problem} className="card card--5">
					<SvgProblem />
					<h4 className="card__title">Problem Solving</h4>
					<p className="card__text">
						Developing custom projects always requires thinking out
						the box and coming up with efficient and scalable solutions.
						Having that in mind, the constant practice of really rubbed off the
						problem-solving nature as a developer.
					</p>
				</div>
			</div>
		);
	}
}

export default Cards;
