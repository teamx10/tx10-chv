import { useState } from 'react';

export const useTitle = () => {
  const [title, setTitle] = useState('Crypto Helicopter View');

  return {
    title,
    setTitle
  };
};
