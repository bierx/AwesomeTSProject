import {Store} from '../../types/types';

export const getUserName = (state: Store) => state?.user?.name;
