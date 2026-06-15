import { useContext, useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

import { SvgReact } from '../Svg';
import particlesParams from '../../utils/particlesParams';
import FunctionalityContext from '../../contexts/FunctionalityContext';

const Dark = () => {
	const functionality = useContext(FunctionalityContext);
	const [particlesReady, setParticlesReady] = useState(false);

	useEffect(() => {
		functionality.initiateProcess();
	}, [functionality]);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => setParticlesReady(true));
	}, []);

	return (
		<>
			<div ref={functionality.particlesDiv} className="particles__div">
				{particlesReady && (
					<Particles
						id="tsparticles"
						options={particlesParams}
						className="particles"
					/>
				)}
			</div>
			<div className="dark">
				<div className="logo">
					<div
						ref={functionality.logoIcon}
						className="logo__icon"
						onClick={functionality.onLogoClick}
					></div>
					<span ref={functionality.logoName} className="logo__name">
						Rinor Sadiku
					</span>
				</div>

				<SvgReact />
			</div>
		</>
	);
};

export default Dark;
