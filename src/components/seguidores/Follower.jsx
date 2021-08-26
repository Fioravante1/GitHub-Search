import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import requestApi from '../../services/httpServise';
import getNewId from '../../services/idService';
import arrow from '../../Assets/arrow.png';
import * as F from './styles';

function Follower() {
  const { valueInputUser, setInfoFollowers, infoFollowers } = useContext(Context);

  const history = useHistory();
  const { location: { pathname } } = history;

  useEffect(() => {
    async function requestFollowers() {
      if (pathname === '/followers') {
        const responseFollowers = await requestApi(`/${valueInputUser}/followers`) || [];
        setInfoFollowers(responseFollowers);
      }
    }
    requestFollowers();
  }, []);

  return (

    infoFollowers.map((value) => (
      <F.ContainerFollower key={getNewId()}>
        <F.IconArrow src={arrow} alt="arrow" />
        <F.AvatarFollower src={value.avatar_url} alt={value.login} />
        <F.NameLogin>
          {`#${value.login}`}
        </F.NameLogin>
      </F.ContainerFollower>

    ))

  );
}

export default Follower;
