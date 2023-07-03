import React from 'react';
import Header from './Header';
import SearchResultPage from './SearchResultPage';
import RankingPage from './RankingPage';
import Top from './Top';
import PrivacyPage from './PrivacyPage';
import Sidebar from './Sidebar';
import Temp from './tmp';

import { Route, Routes, useLocation } from 'react-router-dom';


const App = () => {
  const location = useLocation();
  const showHeader = location.pathname !== "/home";

  return (
    <div>
      <Sidebar/>
      {showHeader && <Header/>}
      <Routes>
        <Route path="/home" element={<Top />} />
        <Route path="/search/" element={<SearchResultPage />} />
        <Route path="/ranking/" element={<RankingPage/>} />
        <Route path="/privacy_policy" element={<PrivacyPage />} />
        <Route path="/tmp" element={<Temp />} />
      </Routes>
    </div>
  );
};

export default App;

