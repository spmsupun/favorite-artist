import * as React from 'react';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import AddFavorite from './add-favorite';

export default function TrackItem(props:any) {
  const { track } = props;
  const [image, setImage] = useState('');

  useEffect(() => {
    setImage(track.image.find((imageItem: any) => imageItem.size === 'medium')['#text']);
  }, [track]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={4} md={4} sm={4}>
        <Link
          to={{
            pathname: '/track',
            search: `?track=${track.name}&artist=${track.artist}`,
          }}
        >
          {' '}
          <img src={image} alt={track.name} />
        </Link>
      </Grid>
      <Grid item xs={8} md={8}>
        <span>{track.name}</span>
        <br />
        <small>
          By
          {' '}
          {track.artist}
        </small>
        <br />
        <small>
          <AddFavorite track={track} />
        </small>
      </Grid>
    </Grid>
  );
}
