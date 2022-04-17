import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import store from './stores';
import Home from './pages/home';
import Album from './pages/album';
import Track from './pages/track';
import Favorite from './pages/favorite';

export default function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album" element={<Album />} />
        <Route path="/track" element={<Track />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </Provider>
  );
}
