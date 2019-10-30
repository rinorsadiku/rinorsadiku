import React from 'react';
import { galleryItems } from '../../utils/galleryItems';

import GuideGalleryItem from './GuideGalleryItem';

import FunctionalityContext from '../../contexts/FunctionalityContext';

class GuideContentLarge extends React.Component {
	static contextType = FunctionalityContext;

	state = {
		contentIndex: 0
	};

	renderItems = () => {
		return galleryItems[this.state.contentIndex].items.map(item => {
			return <GuideGalleryItem key={item.title} item={item} />;
		});
	};

	changeContent = () => {
		// Disappear content
		this.context.disappear(this.context.guideContent);

		if (this.state.contentIndex === 0)
			return this.setState({ contentIndex: 1 }, () =>
				this.context.appear(this.context.guideContent)
			);
		this.setState({ contentIndex: 0 }, () =>
			this.context.appear(this.context.guideContent)
		);
	};

	render() {
		return (
			<>
				<div className="gallery__list">{this.renderItems()}</div>
				<button
					className="gallery__btn btn"
					onClick={this.changeContent}
				>
					{galleryItems[this.state.contentIndex].button}
				</button>
			</>
		);
	}
}

export default GuideContentLarge;
