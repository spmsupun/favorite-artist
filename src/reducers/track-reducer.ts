import { SET_TRACK } from '../constants/action-types';

const trackReducer = (state: any = {}, action: any = null) => {
  switch (action.type) {
    case SET_TRACK:
      return action.data;
    default:
      return state;
  }
};
export default trackReducer;
