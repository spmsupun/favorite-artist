import * as React from 'react';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AlbumItem(props:any) {
  const { album } = props;
  const [image, setImage] = useState('');

  useEffect(() => {
    setImage(album.image.find((imageItem: any) => imageItem.size === 'medium')['#text']);
  }, [album]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={4} md={4} sm={4}>
        <Link
          to={{
            pathname: '/album',
            search: `?album=${album.name}&artist=${album.artist}`,
          }}
        >
          {' '}
          <img src={image} alt={album.name} />
        </Link>
      </Grid>
      <Grid item xs={8} md={8}>
        <span>{album.name}</span>
      </Grid>
    </Grid>
  );
}
