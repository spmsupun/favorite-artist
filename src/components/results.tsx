import * as React from 'react';
import AlbumsResults from './albums-results';
import TrackResults from './track-results';

export default function Results({ searchType }:any) {
  return (
    <>
      {searchType === 'artists' && <AlbumsResults />}
      {searchType === 'track' && <TrackResults />}
    </>
  );
}
