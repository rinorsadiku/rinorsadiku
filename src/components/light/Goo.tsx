import { useTrail, animated } from '@react-spring/web';

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x: number, y: number) =>
	`translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

interface GooProps {
	show: boolean;
}

const Goo = ({ show }: GooProps) => {
	const [trail, api] = useTrail(3, (i) => ({
		xy: [window.innerWidth / 4 - 120, window.innerHeight / 2],
		config: i === 0 ? fast : slow
	}));

	if (!show) return null;

	return (
		<div className="goo__container">
			<svg style={{ position: 'absolute', width: 0, height: 0 }}>
				<filter id="goo">
					<feGaussianBlur
						in="SourceGraphic"
						result="blur"
						stdDeviation="30"
					/>
					<feColorMatrix
						in="blur"
						values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
					/>
				</filter>
			</svg>

			<svg style={{ position: 'absolute', width: 0, height: 0 }}>
				<filter id="goo">
					<feGaussianBlur
						in="SourceGraphic"
						result="blur"
						stdDeviation="30"
					/>
					<feColorMatrix
						in="blur"
						values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
					/>
				</filter>
			</svg>
			<div
				className="hooks-main"
				onMouseMove={(e) =>
					api.start({
						xy: [e.clientX - window.innerWidth / 2, e.clientY]
					})
				}
			>
				{trail.map((style, index) => (
					<animated.div
						key={index}
						style={{ transform: style.xy.to(trans) }}
					/>
				))}
			</div>
		</div>
	);
};

export default Goo;
