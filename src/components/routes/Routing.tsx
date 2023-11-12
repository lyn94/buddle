import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Activity from '../pages/Activity';
import Channel from '../pages/Channel';
import Meditation from '../pages/Meditation/index';
import MyPage from '../pages/MyPage';
import MeditationDetail from '../pages/Meditation/MeditationDetail';
import HeaderBar from '../common/HeaderBar';

const Routing = () => {
  return (
    <BrowserRouter>
      <HeaderBar />
      <Routes>
        <Route index path="/meditation" element={<Meditation />} />
        <Route index path="/meditation/detail" element={<MeditationDetail />} />
        <Route path="/channel" element={<Channel />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Navigation />
    </BrowserRouter>
  );
};

export default Routing;
