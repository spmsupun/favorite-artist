import * as React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import TrackItem from './track-item';

export default function TrackResults() {
  const tracks = useSelector((state: any) => state.tracks);

  return (
    <>
      <h3>Tracks</h3>
      <Grid container spacing={3}>
        {tracks?.map((track: any, index: number) => (
          <Grid item xs={8} sm={4} md={3}>
            <TrackItem key={index} track={track} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
