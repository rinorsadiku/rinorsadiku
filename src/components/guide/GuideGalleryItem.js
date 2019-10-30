import React from 'react';
import { SvgBack, SvgCode, SvgRefresh, SvgMagic } from '../Svg';
import { tooltips } from '../../utils/galleryItems';
import FunctionalityContext from '../../contexts/FunctionalityContext';

class GuideGalleryItem extends React.Component {
	static contextType = FunctionalityContext;

	constructor(props) {
		super(props);

		this[`gallery${this.props.item.title}`] = React.createRef();
		this[`video${this.props.item.title}`] = React.createRef();

		this.SVGs = [<SvgCode />, <SvgRefresh />, <SvgMagic />];

		this.state = {
			showVideo: false
		};
	}

	launchPreview = () => {
		this.context.launchPreview(this[`gallery${this.props.item.title}`]);
		this.setState({ showVideo: true });
	};

	removePreview = () => {
		this.context.removePreview(
			this[`gallery${this.props.item.title}`],
			this[`video${this.props.item.title}`]
		);
		this.setState({ showVideo: false });
	};

	renderContent = item => {
		if (!this.state.showVideo) {
			return (
				<>
					<div
						className={`gallery__image gallery__image--${item.image}`}
						onClick={this.launchPreview}
					></div>
					<div
						className={`gallery__symbol gallery__symbol--${item.symbol}`}
					>
						{this.SVGs[item.svg]}
					</div>
					<span
						className={`gallery__tooltip gallery__tooltip--${item.position}`}
					>
						{tooltips[item.svg]}
					</span>
					<a
						href={item.link}
						className="link"
						target="_blank"
						rel="noopener noreferrer"
					>
						{item.title}
					</a>
				</>
			);
		}

		return (
			<>
				<video
					ref={this[`video${item.title}`]}
					className="gallery__video"
					autoPlay
					muted
					loop
				>
					<source
						src={`http://d1mpb2v3w5kcj6.cloudfront.net/${item.title.toLowerCase()}.mp4`}
						type="video/mp4"
					/>
					your browser is not supported
				</video>

				<button className="gallery__back" onClick={this.removePreview}>
					<SvgBack />
				</button>
			</>
		);
	};

	render() {
		const { item } = this.props;
		return (
			<div ref={this[`gallery${item.title}`]} className="gallery__item">
				{this.renderContent(item)}
			</div>
		);
	}
}

export default GuideGalleryItem;
