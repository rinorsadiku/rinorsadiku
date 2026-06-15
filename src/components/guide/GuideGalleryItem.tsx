import { useContext, useRef, useState, type ReactElement } from 'react';
import { SvgBack, SvgCode, SvgRefresh, SvgMagic } from '../Svg';
import { tooltips, type GalleryItem } from '../../utils/galleryItems';
import FunctionalityContext from '../../contexts/FunctionalityContext';

const SVGs: ReactElement[] = [<SvgCode />, <SvgRefresh />, <SvgMagic />];

interface GuideGalleryItemProps {
	item: GalleryItem;
}

const GuideGalleryItem = ({ item }: GuideGalleryItemProps) => {
	const functionality = useContext(FunctionalityContext);
	const galleryRef = useRef<HTMLDivElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const [showVideo, setShowVideo] = useState(false);

	const launchPreview = () => {
		functionality.launchPreview(galleryRef);
		setShowVideo(true);
	};

	const removePreview = () => {
		functionality.removePreview(galleryRef, videoRef);
		setShowVideo(false);
	};

	const renderContent = () => {
		if (!showVideo) {
			return (
				<>
					<div
						className={`gallery__image gallery__image--${item.image}`}
						onClick={launchPreview}
					></div>
					<div
						className={`gallery__symbol gallery__symbol--${item.symbol}`}
					>
						{SVGs[item.svg]}
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
					ref={videoRef}
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

				<button className="gallery__back" onClick={removePreview}>
					<SvgBack />
				</button>
			</>
		);
	};

	return (
		<div ref={galleryRef} className="gallery__item">
			{renderContent()}
		</div>
	);
};

export default GuideGalleryItem;
