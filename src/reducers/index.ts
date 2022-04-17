import { combineReducers } from 'redux';
import errorReducer from './artists-reducer';
import albumsReducer from './albums-reducer';
import tracksReducer from './tracks-reducer';
import albumReducer from './album-reducer';
import trackReducer from './track-reducer';
import addFavoriteReducer from './add-favorite-reducer';

const rootReducer = combineReducers({
  artists: errorReducer,
  albums: albumsReducer,
  album: albumReducer,
  tracks: tracksReducer,
  track: trackReducer,
  favorite: addFavoriteReducer,
});

export default rootReducer;
