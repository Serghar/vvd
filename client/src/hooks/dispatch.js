import { useState } from 'react';

export const useData = () => {
  const [data, setData] = useState({});
  const fetchData = () => {
    fetch('/express_backend')
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err));
  };

  return {
    data,
    fetchData
  };
};
