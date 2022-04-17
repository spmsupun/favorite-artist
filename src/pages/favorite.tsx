import * as React from 'react';
import { Container, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import AddFavorite from '../components/add-favorite';

export default function Favorite() {
  const favorite = useSelector((state: any) => state.favorite);

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <h3>Favorites</h3>
        <Grid container spacing={3}>
          {favorite?.map((track: any, index: number) => (
            <Grid item xs={8} sm={4} md={3} key={index}>
              <Grid container spacing={3}>
                <Grid item xs={4} md={4} sm={4}>
                  <Link
                    to={{
                      pathname: '/track',
                      search: `?track=${track.name}&artist=${track.artist.name ?? track.artist}`,
                    }}
                  >
                    {' '}
                    <img src={track?.album?.image?.[1]['#text'] ?? 'https://picsum.photos/64/64'} alt={track.name} />
                  </Link>
                </Grid>
                <Grid item xs={8} md={8}>
                  <b>
                    <span style={{ verticalAlign: 'super', marginRight: '5px' }}>{track.name}</span>
                    <AddFavorite track={track} />
                  </b>
                  <br />
                  <small>
                    By
                    {' '}
                    {track.artist.name}
                  </small>
                  <br />
                  <small>
                    Duration:
                    {' '}
                    {track.duration / 60000}
                  </small>

                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
