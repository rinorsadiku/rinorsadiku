import { SvgTriangle, SvgRectangle, SvgCircle } from '../Svg';

interface MorphedSvgsProps {
	morph: boolean;
}

const MorphedSvgs = ({ morph }: MorphedSvgsProps) => {
	return (
		<>
			<SvgTriangle morph={morph} />
			<SvgRectangle morph={morph} />
			<SvgCircle morph={morph} />
		</>
	);
};

export default MorphedSvgs;
