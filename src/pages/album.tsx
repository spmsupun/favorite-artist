import * as React from 'react';
import { useEffect, useState } from 'react';
import { Chip, Container, Grid } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../components/navbar';
import { getAlbum } from '../services/last-fm';

export default function Album() {
  const [img, setImg] = useState();

  const album = useSelector((state: any) => state.album);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getAlbum(searchParams.get('artist'), searchParams.get('album'));
  }, []);

  useEffect(() => {
    setImg(album.image?.find((imageItem:any) => imageItem.size === 'extralarge')?.['#text']);
  }, [album]);

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
              {album.name}
            </h1>
            <h3>{album.artist}</h3>
            <p>{album.wiki?.summary}</p>
            <div>
              {album.tags?.tag.map((trackItem:any, index:number) => (
                <Chip
                  label={trackItem.name}
                  key={index}
                />
              )) }
            </div>
          </Grid>
        </Grid>
        <h4>Tracks</h4>
        {album.tracks?.track.map((trackItem:any, index:number) => (
          <div key={index}>
            <Link
              to={{
                pathname: '/track',
                search: `?track=${trackItem.name}&artist=${album.artist}`,
              }}
            >
              {trackItem.name}
            </Link>
          </div>
        ))}
      </Container>
    </>
  );
}
