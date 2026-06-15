import { createContext } from 'react';
import Functionality from '../utils/Functionality';

const FunctionalityContext = createContext<Functionality>(new Functionality());

export default FunctionalityContext;
