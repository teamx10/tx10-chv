import React, { FC } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HashPage } from './pages/hash';
import { HomePage } from './pages/home';

export const AppRouting: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="hash" element={<HashPage />} />
    </Routes>
  </BrowserRouter>
);
