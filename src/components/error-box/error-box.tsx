import { FC } from 'react';

import { Box, Typography } from '@mui/material';

interface Props {
  error: Error | null;
}

export const ErrorBox: FC<Props> = ({ error }) => {
  if (!error) {
    return null;
  }

  return (
    <Box sx={{ color: 'red' }}>
      <Typography variant="h2">{error.name}</Typography>
      <Typography variant="h4">{error.message}</Typography>
    </Box>
  );
};
