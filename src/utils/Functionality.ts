import { type RefObject } from 'react';
import createRefs, { type AppRefs } from './refs';

/**
 * Refs are mutated against live DOM nodes whose concrete element type is not
 * relevant to these animation helpers, so they are accepted loosely.
 */
type ElementRef = RefObject<HTMLElement | SVGElement | null>;

interface Functionality extends AppRefs {}

class Functionality {
	constructor() {
		Object.assign(this, createRefs());
	}

	delay = async (ms: number): Promise<void> => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};

	initiateProcess = () => {
		window.onload = async () => {
			await this.delay(3000);
			this.logoIcon.current!.classList.add('logo__icon--animated');
		};
	};

	onLogoClick = async () => {
		this.logoName.current!.style.transform = 'scaleX(1)';
		await this.delay(1000);
		this.logoIcon.current!.classList.remove('logo__icon--animated');
		await this.delay(500);
		this.modal.current!.style.transform = 'translateY(0)';
	};

	onModalClose = async () => {
		this.modal.current!.style.opacity = '0';
		await this.delay(300);
		this.particlesDiv.current!.style.opacity = '1';
		this.reactLogo.current!.classList.add('react--visible');
		await this.delay(1700);
		this.modal.current!.style.display = 'none';
	};

	onReactLogoClick = () => {
		this.reactLogo.current!.classList.remove('react--visible');
		this.guide.current!.style.visibility = 'visible';
		this.guideToggle.current!.classList.add('guide__toggle--animated');
	};

	toggleGuide = async () => {
		if (this.guideCheck.current!.checked) {
			this.guideCont.current!.style.transform = 'scale(0)';
			this.guide.current!.style.zIndex = '2';
			await this.delay(350);

			if (this.guide.current!.classList.contains('guide--large')) {
				this.guide.current!.classList.remove('guide--large');
				this.guideCont.current!.classList.remove('guide__cont--border');
				this.guideContent.current!.classList.remove('gallery');
				this.guideContent.current!.classList.add(
					'guide__content--small'
				);
				this.guideCont.current!.style.gridTemplateRows =
					'minmax(12rem, min-content) min-content 1fr';

				await this.delay(350);
			}
		} else {
			this.guideCont.current!.style.transform = 'scale(1)';
			this.guide.current!.style.zIndex = '3';
		}
	};

	activeCircle = (index: number) => {
		const circleChildren = this.guideCircles.current!.children;
		Array.from(circleChildren).forEach((child) =>
			child.classList.remove('guide__circle--active')
		);
		circleChildren[index].classList.add('guide__circle--active');
	};

	enlargeGuide = async () => {
		this.guide.current!.classList.add('guide--large');
		this.guideContent.current!.classList.remove('guide__content--small');
		this.guideContent.current!.classList.add('gallery');
		this.guideCont.current!.classList.add('guide__cont--border');
		this.guideCont.current!.style.gridTemplateRows =
			'minmax(4rem, min-content) min-content 1fr';
		await this.delay(150);
	};

	animateCartoon = async (animate = true) => {
		const items: Array<RefObject<SVGRectElement | null>> = [
			this.leftTop,
			this.rightTop,
			this.rightBottom,
			this.torso,
			this.leftBottom
		];

		// Set the opacity to .6
		items.forEach((item) => {
			item.current!.style.cursor = 'pointer';
			item.current!.style.opacity = '.6';
		});

		// Loop through the selectors and set the opacity to 1
		let index = 1;
		while (animate) {
			if (index !== 1) {
				items[index - 2].current!.style.opacity = '.6';
				await this.delay(1000);
			}

			index = index > items.length ? 1 : index;

			items[index - 1].current!.style.opacity = '1';
			index++;
			await this.delay(1000);
		}
	};

	appearQuality = (animate: boolean, selector: ElementRef) => {
		if (!animate) return;
		this.cards.current!.style.zIndex = '2';
		selector.current!.classList.add('card--appear');
	};

	removeQuality = (animate: boolean, selector: ElementRef) => {
		if (!animate) return;
		this.cards.current!.style.zIndex = '1';
		selector.current!.classList.remove('card--appear');
	};

	launchPreview = async (item: ElementRef) => {
		item.current!.classList.add('gallery__video-cont');
		item.current!.classList.remove('gallery__item');

		await this.delay(180);
	};

	removePreview = async (item: ElementRef, video: ElementRef) => {
		video.current!.style.transform = 'scale(0)';
		await this.delay(310);

		item.current!.classList.remove('gallery__video-cont');
		item.current!.classList.add('gallery__item');
	};

	appear = async (...selectors: ElementRef[]) => {
		await this.delay(180);
		selectors.forEach((el) => (el.current!.style.opacity = '1'));
	};

	disappear = async (...selectors: ElementRef[]) => {
		selectors.forEach((el) => (el.current!.style.opacity = '0'));
		await this.delay(180);
	};
}

export default Functionality;
