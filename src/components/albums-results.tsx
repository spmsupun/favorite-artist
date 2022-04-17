import * as React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import AlbumItem from './album-item';

export default function AlbumsResults() {
  const albums = useSelector((state: any) => state.albums);

  return (
    <>
      <h3>Albums</h3>
      <Grid container spacing={3}>
        {albums?.map((album: any, index: number) => (
          <Grid item xs={8} sm={4} md={3} key={index}>
            <AlbumItem album={album} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
