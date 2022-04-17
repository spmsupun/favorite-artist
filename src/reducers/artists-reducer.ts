import { SET_ARTISTS } from '../constants/action-types';

const artistReducer = (state: any = [], action: any = null) => {
  switch (action.type) {
    case SET_ARTISTS:
      return action.data;
    default:
      return state;
  }
};

export default artistReducer;
