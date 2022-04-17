import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SET_ALBUM,
  SET_ALBUMS,
  SET_ARTISTS,
  SET_TRACK,
  SET_TRACKS,
} from '../constants/action-types';

export const setArtists = (data: any) => ({
  type: SET_ARTISTS,
  data,
});

export const setAlbums = (data: any) => ({
  type: SET_ALBUMS,
  data,
});

export const setAlbum = (data: any) => ({
  type: SET_ALBUM,
  data,
});

export const setTracks = (data: any) => ({
  type: SET_TRACKS,
  data,
});

export const setTrack = (data: any) => ({
  type: SET_TRACK,
  data,
});

export const addToFavorite = (data: any) => ({
  type: ADD_FAVORITE,
  data,
});

export const removeFromFavorite = (data: any) => ({
  type: REMOVE_FAVORITE,
  data,
});

export default {};
