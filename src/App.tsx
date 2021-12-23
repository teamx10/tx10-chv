import { FC, Fragment } from 'react';

import { AppRouting } from './App.routing';
import { AppTitle } from './components/app-title';

export const App: FC = () => {
  return (
    <Fragment>
      <AppTitle />
      <AppRouting />
    </Fragment>
  );
};
