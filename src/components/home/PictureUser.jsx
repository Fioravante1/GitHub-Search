import React, { useContext } from 'react';
import Context from '../../context/Context';

function PictureUser() {
  const { data } = useContext(Context);

  return (
    <img src={data.avatar_url} alt={data.name} />
  );
}

export default PictureUser;
