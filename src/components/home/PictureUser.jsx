import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import * as HO from './styles';
// import star from '../../Assets/star.png';

function PictureUser() {
  const { data, dataFollo } = useContext(Context);

  const history = useHistory();
  const { location: { pathname } } = history;

  return (
    <HO.AvatarContainner>
      <HO.ImageAvatar
        src={pathname === '/home' ? data.avatar_url : dataFollo.avatar_url}
        alt={pathname === '/home' ? data.name : dataFollo.name}
      />
    </HO.AvatarContainner>
  );
}

export default PictureUser;
