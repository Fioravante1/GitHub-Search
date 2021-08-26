import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import requestApi from '../../services/httpServise';
import getNewId from '../../services/idService';
import arrow from '../../Assets/arrow.png';
import arrowRight from '../../Assets/arrow_right.png';
import * as F from './styles';

function FollowingComponent() {
  const { valueInputUser, setInfoFollowing, infoFollowing } = useContext(Context);

  const history = useHistory();
  const { location: { pathname } } = history;

  useEffect(() => {
    async function requestFollowing() {
      if (pathname === '/following') {
        const responseFollowing = await requestApi(`/${valueInputUser}/following`) || [];
        setInfoFollowing(responseFollowing);
      }
    }
    requestFollowing();
  }, [valueInputUser]);
  return (

    infoFollowing.map((value) => (
      <F.ContainerFollowing key={getNewId()}>

        <F.ContainerInfoLogin>
          <F.IconArrow src={arrow} alt="arrow" />
          <F.AvatarFollowing src={value.avatar_url} alt={value.login} />
          <F.NameLogin>{`#${value.login}`}</F.NameLogin>
        </F.ContainerInfoLogin>

        <Link to="/home">
          <F.IconArrowRight src={arrowRight} alt="arrow right" />
        </Link>
      </F.ContainerFollowing>
    ))

  );
}

export default FollowingComponent;
