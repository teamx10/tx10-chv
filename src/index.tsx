import { StrictMode } from 'react';

import { CssBaseline } from '@mui/material';
// eslint-disable-next-line import/order
import { render } from 'react-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css';

import { AppRouting } from './App.routing';
import reportWebVitals from './reportWebVitals';

render(
  <StrictMode>
    <CssBaseline />
    <AppRouting />
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
