import { useContext, useState } from 'react';
import { galleryItems } from '../../utils/galleryItems';

import GuideGalleryItem from './GuideGalleryItem';

import FunctionalityContext from '../../contexts/FunctionalityContext';

const GuideContentLarge = () => {
	const functionality = useContext(FunctionalityContext);
	const [contentIndex, setContentIndex] = useState(0);

	const renderItems = () => {
		return galleryItems[contentIndex].items.map((item) => {
			return <GuideGalleryItem key={item.title} item={item} />;
		});
	};

	const changeContent = async () => {
		// Disappear content
		await functionality.disappear(functionality.guideContent);

		setContentIndex((prev) => (prev === 0 ? 1 : 0));

		await functionality.appear(functionality.guideContent);
	};

	return (
		<>
			<div className="gallery__list">{renderItems()}</div>
			<button className="gallery__btn btn" onClick={changeContent}>
				{galleryItems[contentIndex].button}
			</button>
		</>
	);
};

export default GuideContentLarge;
