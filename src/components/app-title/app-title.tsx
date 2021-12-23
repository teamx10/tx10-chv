import { FC } from 'react';

import { Helmet } from 'react-helmet';

import { useTitle } from '../../hooks/useTitle';

export const AppTitle: FC = () => {
  const { title } = useTitle();

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};
