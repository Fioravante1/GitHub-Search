import React, { useContext } from 'react';
import Context from '../../context/Context';
import { AvatarContainner } from './styles';

function PictureUser() {
  const { data } = useContext(Context);

  return (
    <AvatarContainner>
      <img src={data.avatar_url} alt={data.name} />
    </AvatarContainner>
  );
}

export default PictureUser;
