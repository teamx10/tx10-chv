import { ChangeEvent, FC, useState } from 'react';

import { Box, TextField } from '@mui/material';

import { encrypt, decrypt } from '../../utils/crypt';
import { ErrorBox } from '../error-box/error-box';

export const HashForm: FC = () => {
  const [value, setValue] = useState('');
  const [hash, setHash] = useState('');
  const [error, setError] = useState<Error | null>(null);

  const handleValueChange = async (event: ChangeEvent<HTMLTextAreaElement>) => {
    const _value = event.target.value;
    setValue(_value);
    setError(null);
    try {
      setHash(encrypt(_value));
    } catch (err) {
      setError(err as Error);
    }
  };

  const handleHashChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const _hash = event.target.value;
    setHash(_hash);
    setError(null);
    try {
      setValue(decrypt(_hash));
    } catch (err) {
      setError(err as Error);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off"
    >
      <Box>
        <TextField
          label="Data for hashing"
          placeholder="Past data here"
          variant="filled"
          multiline
          value={value}
          rows={4}
          onChange={handleValueChange}
          sx={{ minWidth: 600 }}
        />
        <TextField
          label="Hash"
          placeholder="Hash"
          variant="filled"
          multiline
          value={hash}
          rows={4}
          onChange={handleHashChange}
          sx={{ minWidth: 600 }}
        />
      </Box>
      <ErrorBox error={error} />
    </Box>
  );
};
