import { createRef, type RefObject } from 'react';

export interface AppRefs {
	cards: RefObject<HTMLDivElement | null>;
	guide: RefObject<HTMLDivElement | null>;
	guideButton: RefObject<HTMLButtonElement | null>;
	guideCircles: RefObject<HTMLDivElement | null>;
	guideCheck: RefObject<HTMLInputElement | null>;
	guideContent: RefObject<HTMLDivElement | null>;
	guideCont: RefObject<HTMLDivElement | null>;
	guideToggle: RefObject<HTMLLabelElement | null>;
	guideHeader: RefObject<HTMLHeadingElement | null>;
	guideText: RefObject<HTMLParagraphElement | null>;
	logoIcon: RefObject<HTMLDivElement | null>;
	logoName: RefObject<HTMLSpanElement | null>;
	modal: RefObject<HTMLDivElement | null>;
	particlesDiv: RefObject<HTMLDivElement | null>;
	reactLogo: RefObject<SVGSVGElement | null>;
	rightTop: RefObject<SVGRectElement | null>;
	leftTop: RefObject<SVGRectElement | null>;
	rightBottom: RefObject<SVGRectElement | null>;
	leftBottom: RefObject<SVGRectElement | null>;
	torso: RefObject<SVGRectElement | null>;
	passion: RefObject<HTMLDivElement | null>;
	integrity: RefObject<HTMLDivElement | null>;
	commitment: RefObject<HTMLDivElement | null>;
	problem: RefObject<HTMLDivElement | null>;
	value: RefObject<HTMLDivElement | null>;
}

const createRefs = (): AppRefs => ({
	cards: createRef(),
	guide: createRef(),
	guideButton: createRef(),
	guideCircles: createRef(),
	guideCheck: createRef(),
	guideContent: createRef(),
	guideCont: createRef(),
	guideToggle: createRef(),
	guideHeader: createRef(),
	guideText: createRef(),
	logoIcon: createRef(),
	logoName: createRef(),
	modal: createRef(),
	particlesDiv: createRef(),
	reactLogo: createRef(),
	rightTop: createRef(),
	leftTop: createRef(),
	rightBottom: createRef(),
	leftBottom: createRef(),
	torso: createRef(),
	passion: createRef(),
	integrity: createRef(),
	commitment: createRef(),
	problem: createRef(),
	value: createRef()
});

export default createRefs;
