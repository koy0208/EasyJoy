import React from 'react';
import Header from './Header';
import SearchResultPage from './SearchResultPage';
import CategoryPage from './CategoryPage';
import Temp from './tmp';

import { Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/search/" element={<SearchResultPage />} />
        <Route path="/ranking/" element={<CategoryPage/>} />
        <Route path="/tmp" element={<Temp />} />
      </Routes>
    </div>
  );
};

export default App;

