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
    pathname === '/home'
      ? (
        <HO.AvatarContainner>
          <HO.ImageAvatar src={data.avatar_url} alt={data.name} />
        </HO.AvatarContainner>
      )
      : (
        <HO.AvatarContainner>
          <HO.ImageAvatar src={dataFollo.avatar_url} alt={dataFollo.name} />
        </HO.AvatarContainner>
      )
  );
}

export default PictureUser;
