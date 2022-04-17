import { SET_ALBUMS } from '../constants/action-types';

const albumsReducer = (state: any = [], action: any = null) => {
  switch (action.type) {
    case SET_ALBUMS:
      return action.data;
    default:
      return state;
  }
};
export default albumsReducer;
