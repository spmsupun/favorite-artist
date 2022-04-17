import axios, { AxiosResponse } from 'axios';
import store from '../stores';
import {
  setAlbum, setAlbums, setArtists, setTrack, setTracks,
} from '../actions';

const { REACT_APP_LAST_FM_BASE_URL, REACT_APP_LAST_FM_API_KEY } = process.env as any;

export const searchArtist = (artist: string = '') => {
  axios.get(REACT_APP_LAST_FM_BASE_URL, {
    params: {
      method: 'artist.search',
      artist,
      api_key: REACT_APP_LAST_FM_API_KEY,
      format: 'json',

    },
  }).then((response: AxiosResponse) => {
    store.dispatch(setArtists(response.data.results?.artistmatches?.artist ?? []));
    return response;
  });
};

export const searchAlbums = (album: string = '') => {
  axios.get(REACT_APP_LAST_FM_BASE_URL, {
    params: {
      method: 'album.search',
      album,
      api_key: REACT_APP_LAST_FM_API_KEY,
      format: 'json',

    },
  }).then((response: AxiosResponse) => {
    store.dispatch(setAlbums(response.data.results?.albummatches?.album ?? []));
    return response;
  });
};

export const getAlbum = (artist: string | null = '', album: string | null = '') => {
  axios.get(REACT_APP_LAST_FM_BASE_URL, {
    params: {
      method: 'album.getinfo',
      artist,
      album,
      api_key: REACT_APP_LAST_FM_API_KEY,
      format: 'json',
    },
  }).then((response: AxiosResponse) => {
    store.dispatch(setAlbum(response.data.album ?? []));
    return response;
  });
};

export const searchTracks = (track: string = '') => {
  axios.get(REACT_APP_LAST_FM_BASE_URL, {
    params: {
      method: 'track.search',
      track,
      api_key: REACT_APP_LAST_FM_API_KEY,
      format: 'json',

    },
  }).then((response: AxiosResponse) => {
    store.dispatch(setTracks(response.data.results?.trackmatches?.track ?? []));
    return response;
  });
};
export const getTrack = (track: string | null = '', artist: string | null = '') => {
  axios.get(REACT_APP_LAST_FM_BASE_URL, {
    params: {
      method: 'track.getInfo',
      track,
      artist,
      api_key: REACT_APP_LAST_FM_API_KEY,
      format: 'json',

    },
  }).then((response: AxiosResponse) => {
    store.dispatch(setTrack(response.data?.track ?? []));
    return response;
  });
};
