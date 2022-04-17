import { SET_TRACKS } from '../constants/action-types';

const tracksReducer = (state: any = [], action: any = null) => {
  switch (action.type) {
    case SET_TRACKS:
      return action.data;
    default:
      return state;
  }
};
export default tracksReducer;
