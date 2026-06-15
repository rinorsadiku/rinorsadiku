import { type ISourceOptions } from '@tsparticles/engine';

const particlesParams: ISourceOptions = {
	fullScreen: {
		enable: false
	},
	particles: {
		number: {
			value: 70,
			density: {
				enable: true,
				width: 800,
				height: 800
			}
		},
		color: {
			value: '#ffffff'
		},
		shape: {
			type: 'circle'
		},
		opacity: {
			value: 0.5
		},
		size: {
			value: { min: 0.1, max: 3 }
		},
		links: {
			enable: true,
			distance: 150,
			color: '#ffffff',
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 6,
			direction: 'none',
			random: false,
			straight: false,
			outModes: {
				default: 'out'
			}
		}
	},
	interactivity: {
		detectsOn: 'canvas',
		events: {
			onHover: {
				enable: true,
				mode: 'repulse'
			},
			onClick: {
				enable: true,
				mode: 'push'
			},
			resize: {
				enable: true
			}
		},
		modes: {
			grab: {
				distance: 400,
				links: {
					opacity: 1
				}
			},
			bubble: {
				distance: 400,
				size: 40,
				duration: 2,
				opacity: 0.8
			},
			repulse: {
				distance: 150,
				duration: 0.4
			},
			push: {
				quantity: 4
			},
			remove: {
				quantity: 2
			}
		}
	},
	detectRetina: true
};

export default particlesParams;
