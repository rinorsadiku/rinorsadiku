import { useContext } from 'react';
import { SvgModal } from '../Svg';
import FunctionalityContext from '../../contexts/FunctionalityContext';

const Modal = () => {
	const functionality = useContext(FunctionalityContext);

	return (
		<div ref={functionality.modal} className="modal">
			<SvgModal />

			<p className="modal__paragraph paragraph paragraph--dark">
				This website will contain quite some
				<span className="paragraph--heavy"> hidden gems</span>... the
				same way{' '}
				<span className="paragraph--heavy">
					I consider myself in this world.
				</span>
			</p>

			<h4 className="heading-4 heading-4--dark">Ready to explore?</h4>

			<p className="paragraph paragraph--dark">
				I suggest starting from the left side.
			</p>
			<button
				onClick={functionality.onModalClose}
				className="modal__btn btn"
			>
				Start
			</button>
		</div>
	);
};

export default Modal;
