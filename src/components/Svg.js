import React from 'react';
import FunctionalityContext from '../contexts/FunctionalityContext';

export class SvgReact extends React.Component {
	static contextType = FunctionalityContext;

	render() {
		return (
			<svg
				className="react"
				ref={this.context.reactLogo}
				id="Layer_1"
				viewBox="0 0 426 426"
				xmlns="http://www.w3.org/2000/svg"
				onClick={this.context.onReactLogoClick}
			>
				<path
					d="M412.5 214.3c-9.2 58.5-27.1 75.6-58.8 114.9-31.7 33.3-77.3 88.9-141.9 85.8-58.5-9.2-75.6-27.1-114.9-58.8C63.6 324.5 8 278.9 11.1 214.3c9.2-58.5 27.1-75.6 58.8-114.9 31.7-33.3 77.3-88.9 141.9-85.8 58.5 9.2 75.6 27.1 114.9 58.8 33.3 31.7 88.9 77.3 85.8 141.9z"
					fill="#2c2c2c"
				/>
				<circle className="st1" cx="211.8" cy="214" r="25.1" />
				<path
					className="st1"
					d="M337.7 189c-8.7-7.2-20.9-13.7-35.5-18.7-2.9-1-5.9-2-9-2.8.5-2.1 1-4.2 1.4-6.2 7-33.8 2-60.1-12.9-68.7-7.3-4.2-17.3-4.2-28.8 0-10.6 3.9-22.3 11.3-33.9 21.4-2.3 2-4.7 4.2-7 6.4-1.6-1.5-3.1-2.9-4.7-4.3-25.8-22.9-51.1-31.8-66-23.2-7.3 4.2-12.3 12.9-14.4 25-1.9 11.1-1.3 25 1.6 40.1.6 3 1.3 6.2 2.1 9.3-3.6 1-7.1 2.1-10.4 3.3-30.5 10.6-48.7 26.8-48.7 43.4 0 8.6 5.1 17.6 14.7 25.8 9 7.7 21.7 14.5 36.7 19.6 2.5.8 5 1.6 7.6 2.4-.8 3.4-1.6 6.7-2.2 10-6 31.7-1 55.6 13.3 63.9 3.8 2.2 8.3 3.3 13.4 3.3 4.9 0 10.4-1 16.2-3.1 11.2-3.9 23.4-11.5 35.3-21.9 1.9-1.7 3.9-3.5 5.8-5.4 2.5 2.4 5.1 4.7 7.6 6.9 18 15.5 35.2 23.7 48.8 23.7 4.9 0 9.4-1.1 13.1-3.3 7.5-4.3 12.7-13.2 15-25.6 2.1-11.7 1.6-26.1-1.4-41.6-.5-2.5-1-5-1.7-7.5 1.8-.5 3.5-1.1 5.2-1.6 32.8-10.8 53.1-28.3 53.1-45.5.1-8.5-4.9-17.2-14.3-25.1zM257 103.9c8-2.9 14.6-3.2 18.7-.9 8 4.6 13.7 24.1 7.1 55.9-.4 1.8-.8 3.7-1.3 5.5-11.7-2.7-24.3-4.7-37.6-5.9-7.7-11-15.7-20.9-23.7-29.5 2.1-2.1 4.3-4 6.4-5.9 10.7-9.1 21.2-15.8 30.4-19.2zm-6 133c-4.4 7.6-8.9 14.9-13.4 21.7-8.3.6-16.9.9-25.7.9s-17.3-.3-25.4-.8c-4.8-7-9.4-14.3-13.7-21.7-4.3-7.5-8.3-15.1-12-22.6 3.6-7.6 7.6-15.2 11.9-22.6 4.3-7.5 8.9-14.8 13.6-21.7 8.4-.6 16.9-1 25.5-1 8.7 0 17.2.3 25.6 1 4.6 6.9 9.2 14.1 13.5 21.6 4.4 7.7 8.5 15.2 12.1 22.5-3.6 7.5-7.6 15.1-12 22.7zm18.5-8.9c3.8 8.6 6.9 16.8 9.4 24.7-8.1 1.9-16.9 3.4-26.2 4.5 2.9-4.6 5.8-9.4 8.6-14.3 3-5 5.7-10 8.2-14.9zm-57.2 63.4c-5.7-6.1-11.4-12.9-16.9-20.2 5.3.2 10.8.3 16.4.3 5.7 0 11.4-.1 17-.4-5.5 7.4-11 14.2-16.5 20.3zm-41.1-34.1c-9.2-1-17.9-2.4-25.8-4.2 2.5-8 5.5-16.3 9.1-24.7 2.5 4.8 5.2 9.7 8 14.5 2.7 5 5.6 9.8 8.7 14.4zm-8.8-71.6c-2.8 4.8-5.4 9.7-8 14.5-3.5-8.3-6.5-16.4-8.9-24.3 8-1.8 16.6-3.3 25.5-4.4-3 4.7-5.9 9.4-8.6 14.2zm49.6-48.1c5.5 6 11 12.6 16.5 19.9-5.5-.3-11.1-.4-16.7-.4-5.5 0-11 .1-16.4.4 5.4-7.2 11-13.9 16.6-19.9zm49.3 48c-2.8-4.8-5.6-9.5-8.5-14 8.9 1.1 17.5 2.6 25.6 4.5-2.4 7.8-5.4 15.9-9 24.2-2.5-4.9-5.2-9.8-8.1-14.7zm-121-29.9c-2.7-13.6-3.2-26-1.5-35.7 1.4-8.4 4.5-14.3 8.6-16.7 8-4.6 27.7.2 52 21.8 1.4 1.2 2.8 2.5 4.2 3.9-8.2 8.8-16.2 18.7-23.8 29.5-13.2 1.2-25.8 3.2-37.5 5.8-.8-2.9-1.4-5.7-2-8.6zm-13.6 92.4C97 238 83.5 223.3 83.5 214c0-8.9 12.6-22.3 40.7-32.1 3.1-1.1 6.3-2.1 9.6-3 3.5 11.5 8.1 23.4 13.7 35.5-5.6 12.2-10.3 24.3-13.8 35.9-2.4-.7-4.7-1.5-7-2.2zM155 327c-3 0-5.5-.6-7.4-1.7-7.7-4.4-13-22-7.5-51.2.6-3 1.3-6.1 2-9.3 11.4 2.5 24.1 4.4 37.8 5.5 7.8 10.9 15.9 21 24.1 29.8-1.8 1.7-3.6 3.4-5.3 4.9-18.2 15.7-33.8 22-43.7 22zm128.8-56c6.1 30.8.2 49.8-7.8 54.4-7.7 4.5-25.6.3-48.1-19.1-2.3-2-4.7-4.2-7.1-6.4 7.9-8.6 15.8-18.6 23.5-29.9 13.6-1.2 26.4-3.2 38-5.9.5 2.4 1 4.7 1.5 6.9zm11.5-22.9c-1.5.5-3.1 1-4.7 1.5-3.5-11.2-8.3-23.1-14.2-35.5 5.6-12.1 10.2-23.9 13.7-35.1 2.9.8 5.7 1.7 8.4 2.6 13.1 4.5 24.1 10.3 31.7 16.6 6.5 5.4 10.1 11 10.1 15.8-.1 9.3-14.2 23.9-45 34.1z"
				/>
			</svg>
		);
	}
}

export const SvgTriangle = () => {
	return (
		<svg
			width="101"
			height="96"
			viewBox="0 0 101 96"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="triangle"
		>
			<path
				d="M98.9687 80.8421C108.423 66.0693 71.1792 0 51.6003 0C32.0214 0 -9.34787 66.7662 2.96869 80.8421C16.232 96 88.8634 96.6316 98.9687 80.8421Z"
				fill="#FFAA00"
				id="triangle"
			/>
			<circle
				id="circle"
				cx="50.9686"
				cy="52.4211"
				r="43.5789"
				fill="#FFAA00"
			/>
			<path
				d="M88.594 14.7656C81.6465 6.55502 21.6465 7.1866 12.173 14.7655C7.12043 21.0814 4.59408 78.5551 12.173 86.134C17.2255 91.1866 82.9316 91.8462 88.594 87.3971C97.436 80.4497 93.9381 21.0813 88.594 14.7656Z"
				fill="#FFAA00"
				id="rectangle"
			/>
		</svg>
	);
};

export const SvgRectangle = () => {
	return (
		<svg
			width="101"
			height="96"
			viewBox="0 0 101 96"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="rectangle"
		>
			<path
				d="M98.9687 80.8421C108.423 66.0693 71.1792 0 51.6003 0C32.0214 0 -9.34787 66.7662 2.96869 80.8421C16.232 96 88.8634 96.6316 98.9687 80.8421Z"
				fill="#FFAA00"
				id="triangle"
			/>
			<circle
				id="circle"
				cx="50.9686"
				cy="52.4211"
				r="43.5789"
				fill="#FFAA00"
			/>
			<path
				d="M88.594 14.7656C81.6465 6.55502 21.6465 7.1866 12.173 14.7655C7.12043 21.0814 4.59408 78.5551 12.173 86.134C17.2255 91.1866 82.9316 91.8462 88.594 87.3971C97.436 80.4497 93.9381 21.0813 88.594 14.7656Z"
				fill="#FFAA00"
				id="rectangle"
			/>
		</svg>
	);
};

export const SvgCircle = () => {
	return (
		<svg
			width="101"
			height="96"
			viewBox="0 0 101 96"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="circle"
		>
			<path
				d="M98.9687 80.8421C108.423 66.0693 71.1792 0 51.6003 0C32.0214 0 -9.34787 66.7662 2.96869 80.8421C16.232 96 88.8634 96.6316 98.9687 80.8421Z"
				fill="#FFAA00"
				id="triangle"
			/>
			<circle
				id="circle"
				cx="50.9686"
				cy="52.4211"
				r="43.5789"
				fill="#FFAA00"
			/>
			<path
				d="M88.594 14.7656C81.6465 6.55502 21.6465 7.1866 12.173 14.7655C7.12043 21.0814 4.59408 78.5551 12.173 86.134C17.2255 91.1866 82.9316 91.8462 88.594 87.3971C97.436 80.4497 93.9381 21.0813 88.594 14.7656Z"
				fill="#FFAA00"
				id="rectangle"
			/>
		</svg>
	);
};

export const SvgGraphicSmall = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 357.151 107.4"
			className="guide__graphic"
		>
			<defs>
				<linearGradient
					id="linear-gradient"
					x1="0.257"
					y1="0.348"
					x2="0.73"
					y2="0.348"
					gradientUnits="objectBoundingBox"
				>
					<stop offset="0" stopColor="#987db6" />
					<stop offset="1" stopColor="#c779a3" />
				</linearGradient>
				<linearGradient
					id="linear-gradient-2"
					x1="0.329"
					y1="0.5"
					x2="0.717"
					y2="0.5"
					gradientUnits="objectBoundingBox"
				>
					<stop offset="0" stopColor="#edaf97" />
					<stop offset="1" stopColor="#ee8294" />
				</linearGradient>
				<linearGradient
					id="linear-gradient-3"
					x1="0.106"
					y1="0.062"
					x2="0.788"
					y2="0.944"
					gradientUnits="objectBoundingBox"
				>
					<stop offset="0" stopColor="#fa0" />
					<stop offset="1" stopColor="#ffcd27" />
				</linearGradient>
				<linearGradient
					id="linear-gradient-4"
					x1="0.943"
					y1="0.176"
					x2="0.34"
					y2="0.745"
					xlinkHref="#linear-gradient-3"
				/>
				<linearGradient
					id="linear-gradient-5"
					x1="0.5"
					x2="0.5"
					y2="1"
					gradientUnits="objectBoundingBox"
				>
					<stop offset="0" stopColor="#f90" />
					<stop offset="1" stopColor="#ffcd27" />
				</linearGradient>
				<linearGradient
					id="linear-gradient-6"
					x1="0.49"
					y1="0.165"
					x2="0.182"
					y2="0.919"
					xlinkHref="#linear-gradient-5"
				/>
				<linearGradient
					id="linear-gradient-7"
					x1="0.967"
					y1="0.456"
					x2="0.225"
					y2="0.714"
					xlinkHref="#linear-gradient-5"
				/>
			</defs>
			<g id="Group_40" transform="translate(-2631.011 -836.149)">
				<path
					id="Path_54"
					d="M2631.61,2220.891s9.582-18.237,52.416-17.84,62,17.84,62,17.84v19.822H2631.61Z"
					transform="translate(138.522 -1298)"
					fill="url(#linear-gradient)"
				/>
				<path
					id="Path_53"
					d="M2498.441,2258.083s-9.117-32.282,15.463-42.7,49.262-5.5,66.207-2.405,60.525,20.265,86.345,24.612c41.779,7.033,90.707-32.31,119.568-29.7s43.384,40.466,43.384,40.466l-9.761,9.736C2819.7,2257.949,2498.441,2258.083,2498.441,2258.083Z"
					transform="translate(148 -1314.999)"
					fill="url(#linear-gradient-2)"
				/>
				<g id="Group_35" transform="translate(1154.08 90)">
					<path
						id="Path_50"
						d="M506.018,2052.722a48.074,48.074,0,0,1,35.959,21.726c13.685,20.984,31.716,28.735,53.917,26.632s57.087,33.075,57.087,33.075H520.94c-1.728,0-7.548-1.952-11.721-8.269s-3-10.668-3.2-18.7S506.018,2052.722,506.018,2052.722Z"
						transform="translate(971 -1281.07)"
						fill="url(#linear-gradient-3)"
					/>
					<path
						id="Path_52"
						d="M742.691,2110.156s12.92-26.77,36.7-31.133,32.524-28.1,54.587-36.127,35.616-7.854,35.616-7.854v56.62c0,2.539-2.414,8.815-4.878,11.075s-2.714,3.1-6.4,4.83a17.823,17.823,0,0,1-8.331,2.084C846.927,2109.792,742.691,2110.156,742.691,2110.156Z"
						transform="translate(964.494 -1256.606)"
						fill="url(#linear-gradient-4)"
					/>
				</g>
				<path
					id="Path_55"
					d="M2492.8,2149.581c3.509,0,6.882,2.288,6.781,7.128-.033,1.617-.382,3.16-2.624,6.05-3.605,3.705-3.823,9.646-3.823,9.646s-7.589-10.307-7.589-15.7S2489.289,2149.581,2492.8,2149.581Z"
					transform="translate(1325.326 -2147.075) rotate(25)"
					fill="url(#linear-gradient-5)"
				/>
				<path
					id="Path_56"
					d="M5.508,17.33a4.948,4.948,0,0,0,5.149-5.413c-.025-1.228-.29-2.4-1.992-4.593C5.927,4.511,5.762,0,5.762,0S0,7.826,0,11.917,2.844,17.33,5.508,17.33Z"
					transform="translate(2780.876 893.163) rotate(155)"
					fill="url(#linear-gradient-6)"
				/>
				<path
					id="Path_58"
					d="M8.35,26.272c4.039,0,7.921-2.634,7.806-8.206-.039-1.861-.89-3.147-3.471-6.474C8.535,7.328,8.735,0,8.735,0S0,11.864,0,18.066,4.311,26.272,8.35,26.272Z"
					transform="matrix(-0.829, 0.559, -0.559, -0.829, 2899.55, 857.93)"
					fill="url(#linear-gradient-7)"
				/>
				<path
					id="Path_57"
					d="M5.137,0a4.614,4.614,0,0,1,4.8,5.048c-.024,1.145-.27,2.237-1.858,4.284-2.553,2.623-2.707,6.83-2.707,6.83S0,8.864,0,5.048,2.652,0,5.137,0Z"
					transform="translate(2868.242 902.538) rotate(22)"
					fill="url(#linear-gradient-6)"
				/>
			</g>
		</svg>
	);
};

export const SvgGraphicLarge = () => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				className="guide__graphic--left"
				width="325.392"
				height="204.711"
				viewBox="0 0 325.392 204.711"
			>
				<defs>
					<linearGradient
						id="linear-gradient"
						x1=".106"
						y1=".062"
						x2=".788"
						y2=".944"
						gradientUnits="objectBoundingBox"
					>
						<stop offset="0" stopColor="#fa0" />
						<stop offset="1" stopColor="#ffcd27" />
					</linearGradient>
					<linearGradient
						id="linear-gradient-2"
						x1=".292"
						y1=".583"
						x2=".935"
						y2=".144"
						gradientUnits="objectBoundingBox"
					>
						<stop offset="0" stopColor="#f90" />
						<stop offset="1" stopColor="#ffcd27" />
					</linearGradient>
					<linearGradient
						id="linear-gradient-3"
						x1=".5"
						x2=".5"
						y2="1"
						xlinkHref="#linear-gradient-2"
					/>
				</defs>
				<g id="spillLeft" transform="translate(-260.129 -801.148)">
					<path
						id="Path_50"
						data-name="Path 50"
						d="M506.1 2052.722s42.3 1.659 68.285 48.655 60.226 64.351 102.386 59.641 108.867 75 108.867 75H534.893c-.909 0-5.975.105-11.937 0-3.177-.509-6.177-2.421-8.9-3.7-6.48-5.1-7.959-9.411-7.959-13.3s.372-26.346 0-44.329.003-121.967.003-121.967z"
						transform="translate(-245.802 -1230.21)"
						fill="url(#linear-gradient)"
					/>
					<path
						id="Path_55"
						data-name="Path 55"
						d="M12.642 0c6.115 0 11.992 3.987 11.817 12.422-.058 2.818-.665 5.506-4.572 10.542-6.287 6.456-6.662 16.808-6.662 16.808S0 21.811 0 12.422 6.528 0 12.642 0z"
						transform="rotate(33 -1167.92 1019.564)"
						fill="url(#linear-gradient-2)"
					/>
					<path
						id="Path_61"
						data-name="Path 61"
						d="M15.4 0c7.448 0 14.607 4.857 14.394 15.13-.071 3.432-.81 6.706-5.57 12.841-7.653 7.864-8.115 20.473-8.115 20.473S0 26.567 0 15.13 7.951 0 15.4 0z"
						transform="rotate(68 -373.583 871.45)"
						fill="url(#linear-gradient-3)"
					/>
				</g>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				className="guide__graphic--right"
				width="258.006"
				height="184.578"
				viewBox="0 0 258.006 184.578"
			>
				<defs>
					<linearGradient
						id="linear-gradient"
						x1="0.943"
						y1="0.176"
						x2="0.34"
						y2="0.745"
						gradientUnits="objectBoundingBox"
					>
						<stop offset="0" stopColor="#ffcd27" />
						<stop offset="1" stopColor="#fa0" />
					</linearGradient>
					<linearGradient
						id="linear-gradient-2"
						x1="0.65"
						y1="0.886"
						x2="0.224"
						y2="0.321"
						gradientUnits="objectBoundingBox"
					>
						<stop offset="0" stopColor="#ffcd27" />
						<stop offset="1" stopColor="#f90" />
					</linearGradient>
					<linearGradient
						id="linear-gradient-3"
						x1="0.447"
						y1="0.111"
						x2="0.367"
						y2="0.884"
						xlinkHref="#linear-gradient-2"
					/>
				</defs>
				<g id="spillRight" transform="translate(-1401.118 -821.516)">
					<g
						id="Group_35"
						data-name="Group 35"
						transform="translate(260.129 822.512)"
					>
						<path
							id="Path_52"
							data-name="Path 52"
							d="M743.149,2147.781s18.84-40.53,54.352-47.047,48.58-41.97,81.535-53.961,53.2-11.73,53.2-11.73v84.571c0,3.792.988,13.172-3.256,19.012s-4.3,6.021-10.716,8.132-10.721.813-15.288,1.022S743.149,2147.781,743.149,2147.781Z"
							transform="translate(466.662 -1964.404)"
							fill="url(#linear-gradient)"
						/>
					</g>
					<path
						id="Path_58"
						data-name="Path 58"
						d="M11.822,37.192c5.718,0,11.214-3.729,11.05-11.617-.055-2.635-1.26-4.455-4.913-9.165C12.083,10.374,12.366,0,12.366,0S0,16.8,0,25.576,6.1,37.192,11.822,37.192Z"
						transform="matrix(-0.829, 0.559, -0.559, -0.829, 1501.56, 868.021)"
						fill="url(#linear-gradient-2)"
					/>
					<path
						id="Path_63"
						data-name="Path 63"
						d="M11.1,34.914c5.368,0,10.527-3.5,10.373-10.905-.051-2.473-1.183-4.182-4.612-8.6C11.343,9.739,11.609,0,11.609,0S0,15.767,0,24.009,5.73,34.914,11.1,34.914Z"
						transform="matrix(-0.259, 0.966, -0.966, -0.259, 1440.4, 941.175)"
						fill="url(#linear-gradient-3)"
					/>
					<path
						id="Path_62"
						data-name="Path 62"
						d="M11.822,37.192c5.718,0,11.214-3.729,11.05-11.617-.055-2.635-1.26-4.455-4.913-9.165C12.083,10.374,12.366,0,12.366,0S0,16.8,0,25.576,6.1,37.192,11.822,37.192Z"
						transform="matrix(-0.978, 0.208, -0.208, -0.978, 1609.732, 857.895)"
						fill="url(#linear-gradient-3)"
					/>
				</g>
			</svg>
		</>
	);
};

export const SvgModal = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="64.858"
			height="58.43"
			viewBox="0 0 64.858 58.43"
			className="modal__graphic"
		>
			<g
				id="Group_6"
				transform="translate(-711.724 -1159.065)"
				stroke="#fff"
				strokeWidth=".4"
			>
				<path
					id="Path_27"
					d="M700.985 1178.417l-10.565 15.446h21.4z"
					transform="translate(21.684 -19)"
					fill="#a2ffca"
				/>
				<path
					id="Path_28"
					d="M700.985 1178.417l-10.565 15.446h21.4z"
					transform="translate(43.03 -19)"
					fill="#a2ffca"
				/>
				<path
					id="Path_29"
					d="M700.985 1178.417l-10.565 15.446h21.4z"
					transform="translate(64.377 -19)"
					fill="#a2ffca"
				/>
				<path
					id="Path_30"
					d="M793.38 1290.705l10.633-42.5h-21.4z"
					transform="translate(-49.161 -73.278)"
					fill="#46bb71"
				/>
				<path
					id="Path_31"
					d="M840.93 1217.958l-10.53 42.514 31.835-42.463z"
					transform="translate(-86.133 -43.096)"
					fill="#256d3f"
				/>
				<path
					id="Path_32"
					d="M851.709 1217.958l10.528 42.513-31.837-42.463z"
					transform="translate(-118.217 -43.096)"
					fill="#256d3f"
				/>
				<path
					id="Path_33"
					d="M751.379 1159.417h21.182l-10.442 15.49z"
					transform="translate(-28.597)"
					fill="#46bb71"
				/>
				<path
					id="Path_34"
					d="M751.379 1159.417h21.182l-10.442 15.49z"
					transform="translate(-7.117)"
					fill="#46bb71"
				/>
			</g>
		</svg>
	);
};

export const SvgBack = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
		</svg>
	);
};

export const SvgCode = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="17"
			viewBox="0 0 20 17"
		>
			<text
				transform="translate(10 13)"
				fill="#fefefe"
				fontSize="14"
				fontFamily="Calibri-Light, Calibri"
				fontWeight="300"
			>
				<tspan x="-9.509" y="0">
					&lt;/&gt;
				</tspan>
			</text>
		</svg>
	);
};

export const SvgRefresh = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="18.849"
			height="14.136"
			viewBox="0 0 18.849 14.136"
		>
			<path
				d="M16.449,10.837A7.06,7.06,0,0,1,4.113,14.721l.978-1.282a5.486,5.486,0,0,0,9.771-2.6h-2.3l3.141-4.123,3.141,4.123ZM3.99,9.283A5.486,5.486,0,0,1,13.752,6.69l.977-1.282A7.059,7.059,0,0,0,2.4,9.283H0l3.141,4.123L6.283,9.283Z"
				transform="translate(0 -3)"
				fill="#fefefe"
			/>
		</svg>
	);
};

export const SvgMagic = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16.906"
			height="16.907"
			viewBox="0 0 16.906 16.907"
		>
			<path
				id="iconmonstr-magic-2"
				d="M3.458,1.466,1.465,3.458l13.45,13.449,1.992-1.992L3.458,1.466ZM15.911,14.915l-1,1L4.952,5.949l1-1ZM6.171,1.831A2.726,2.726,0,0,1,7.983,3.644,2.731,2.731,0,0,1,9.8,1.831,2.73,2.73,0,0,1,7.983.018,2.726,2.726,0,0,1,6.171,1.831ZM2.4,6.73A3.615,3.615,0,0,1,0,9.134a3.614,3.614,0,0,1,2.4,2.4,3.616,3.616,0,0,1,2.4-2.4,3.619,3.619,0,0,1-2.4-2.4ZM9.133,4.5a1.927,1.927,0,0,1,1.281,1.282A1.929,1.929,0,0,1,11.7,4.5a1.929,1.929,0,0,1-1.281-1.282A1.93,1.93,0,0,1,9.133,4.5ZM12.251,0A2.2,2.2,0,0,1,10.79,1.462a2.2,2.2,0,0,1,1.463,1.463,2.2,2.2,0,0,1,1.461-1.463A2.2,2.2,0,0,1,12.251,0Z"
				fill="#fefefe"
			/>
		</svg>
	);
};
