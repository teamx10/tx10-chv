import { FC, useEffect } from 'react';

import { HashForm } from '../../components/hash-form';
import { PageUi } from '../../components/page-ui';
import { useTitle } from '../../hooks/useTitle';

export const HashPage: FC = () => {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle('Hash Page');
  }, [setTitle]);

  return (
    <PageUi>
      <h1>Hash Page</h1>
      <HashForm />
    </PageUi>
  );
};
