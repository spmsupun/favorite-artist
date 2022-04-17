import { ADD_FAVORITE, REMOVE_FAVORITE } from '../constants/action-types';

const addFavoriteReducer = (state: any = [], action: any = null) => {
  const found = state.find((item:any) => item.mbid === action.data.mbid);
  switch (action.type) {
    case ADD_FAVORITE:
      if (found) {
        return state;
      }
      return [...state, action.data];
    case REMOVE_FAVORITE:
      return state.filter((item:any) => item.mbid !== action.data.mbid);
    default:
      return state;
  }
};
export default addFavoriteReducer;
