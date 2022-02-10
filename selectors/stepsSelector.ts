import {Store} from '../types/types';

export const getCurrentSteps = (state: Store) => state?.steps?.count;
