import * as React from 'react';
import { useEffect, useState } from 'react';
import { Chip, Container, Grid } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../components/navbar';
import { getTrack } from '../services/last-fm';
import AddFavorite from '../components/add-favorite';

export default function Track() {
  const [img, setImg] = useState();

  const track = useSelector((state: any) => state.track);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getTrack(searchParams.get('track'), searchParams.get('artist'));
  }, []);

  useEffect(() => {
    setImg(track?.album?.image?.find((imageItem:any) => imageItem.size === 'extralarge')?.['#text']);
  }, [track]);

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={8} sm={4} md={3.5}>
            <img src={img} alt="" />
          </Grid>
          <Grid item xs={8} sm={4} md={8}>
            <h1>
              {track.name}
              {' '}
              <AddFavorite track={track} />
            </h1>
            <h3>{track.artist?.name}</h3>
            <p>{track.wiki?.summary}</p>
            <div>
              {track.toptags?.tag.map((trackItem:any, index:number) => (
                <Chip
                  key={index}
                  label={trackItem.name}
                />
              )) }
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
