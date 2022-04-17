import * as React from 'react';
import { useCallback, useRef } from 'react';
import _ from 'lodash';
import Input from './input';
import { searchTracks } from '../services/last-fm';

export default function TrackFilter() {
  const searchText: any = useRef(null);

  const search = _.debounce(useCallback(() => {
    searchTracks(searchText.current.value);
  }, []), 500);

  return (
    <Input
      type="search"
      onChange={search}
      ref={searchText}
      placeholder="TrackItem Name..."
    />
  );
}
