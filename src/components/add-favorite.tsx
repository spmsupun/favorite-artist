import * as React from 'react';
import { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../actions';

const FavoriteIconFillStyled = styled(FavoriteIcon)`
  color: #ff0c5d; 
  cursor:pointer;
`;
const FavoriteIconStyled = styled(FavoriteBorderIcon)`
  color: #ff0c5d; 
  cursor:pointer;
`;

export default function AddFavorite({ track }: any) {
  const [inFavorite, setInFavorite] = useState(false);
  const favorite = useSelector((state: any) => state.favorite);
  const dispatch = useDispatch();

  const addFavorite = () => {
    dispatch(addToFavorite(track));
  };

  const removeFavorite = () => {
    dispatch(removeFromFavorite(track));
  };

  useEffect(() => {
    setInFavorite(!!favorite.find((item:any) => item.mbid === track.mbid));
  }, [favorite, track]);

  return (
    <span>
      {inFavorite ? <FavoriteIconFillStyled onClick={removeFavorite} />
        : <FavoriteIconStyled onClick={addFavorite} />}
    </span>
  );
}
