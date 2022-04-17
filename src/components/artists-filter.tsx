import * as React from 'react';
import { useCallback, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ClickAwayListener } from '@mui/material';
import _ from 'lodash';
import Input from './input';
import { searchAlbums, searchArtist } from '../services/last-fm';

const Container: any = styled.ul`
   ${(props: any) => !props.isFocus && `
    display: none; 
  `}
    list-style: none;
    padding: 5px;
    border: 1px solid #ced4da;
    max-height: 300px;
    overflow: hidden;
    overflow-y: auto;
    background:#fff;
    margin-top: 3px;
    border-radius: 0.25rem;
`;

const Li: any = styled.li`
      white-space: nowrap;  
      overflow: hidden;
      text-overflow: ellipsis; 
      cursor:pointer;
      padding:5px;
       &:hover{
        background: #7ea7cf;
        color: #fff;
        }
`;

export default function ArtistsFilter() {
  const [isFocus, setIsFocus] = useState(false);
  const searchText: any = useRef(null);
  const artists = useSelector((state: any) => state.artists);

  const handleSelect = (value: any) => {
    setIsFocus(false);
    searchAlbums(value.name);
  };

  const search = _.debounce(useCallback(() => {
    searchArtist(searchText.current.value);
  }, []), 500);

  const handleClickAway = () => {
    setIsFocus(false);
  };

  const handleClick = () => {
    setIsFocus((prev) => !prev);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <Input
          type="search"
          onChange={search}
          onClick={handleClick}
          ref={searchText}
          placeholder="Artist Name..."
        />
        <Container isFocus={isFocus}>
          {artists.map((artist: any, index: number) => (
            <Li
              key={index}
              onClick={() => handleSelect(artist)}
            >
              <img
                width={40}
                src={artist.image.find((imageItem: any) => imageItem.size === 'large')?.['#text'] ?? 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png'}
                alt={artist.name}
              />
              <span>{artist.name}</span>
            </Li>
          ))}
        </Container>
      </div>
    </ClickAwayListener>
  );
}
