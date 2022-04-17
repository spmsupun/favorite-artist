import * as React from 'react';
import { useState } from 'react';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import ArtistsFilter from '../components/artists-filter';
import Select from '../components/select';
import Results from '../components/results';
import TrackFilter from '../components/track-filter';
import Navbar from '../components/navbar';

export default function Home() {
  const [searchType, setSearchType] = useState('artists');

  const handleSearchType = (e:any) => {
    setSearchType(e.target.value);
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {searchType === 'artists' && <Grid item md={10}><ArtistsFilter /></Grid>}
          {searchType === 'track' && <Grid item md={10}><TrackFilter /></Grid>}
          <Grid item md={2}>
            <Select value={searchType} onChange={handleSearchType}>
              <option value="artists">Artists</option>
              <option value="track">Track</option>
            </Select>
          </Grid>
        </Grid>
        <Box mt={10} />
        <Results searchType={searchType} />
      </Container>
    </>
  );
}
