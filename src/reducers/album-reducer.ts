import { SET_ALBUM } from '../constants/action-types';

const albumReducer = (state: any = {}, action: any = null) => {
  switch (action.type) {
    case SET_ALBUM:
      return action.data;
    default:
      return state;
  }
};
export default albumReducer;
