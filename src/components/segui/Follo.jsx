import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import requestApi from '../../services/httpServise';
import getNewId from '../../services/idService';
import arrow from '../../Assets/arrow.png';
import arrowRight from '../../Assets/arrow_right.png';
import * as F from './styles';

function Follower() {
  const {
    valueInputUser,
    setInfoFollowers,
    infoFollowers,
    setInfoFollowing,
    infoFollowing,
    userFollo,
    setDataFoloo,
    setIdUser,
  } = useContext(Context);

  const history = useHistory();
  const { location: { pathname } } = history;

  useEffect(() => {
    async function requestFollowers() {
      if (pathname === '/followers' || pathname === '/following') {
        const responseFollowers = await requestApi(`/${userFollo}/followers`) || [];
        setInfoFollowers(responseFollowers);
        const responseFollowing = await requestApi(`/${userFollo}/following`) || [];
        setInfoFollowing(responseFollowing);
      }
    }
    requestFollowers();
  }, [valueInputUser]);

  async function handleClick({ target }) {
    setIdUser(target.id);
    const response = await requestApi(`/${target.id}`) || [];
    setDataFoloo(response);
  }

  return (
    pathname === '/followers'
      ? infoFollowers.map((value) => (
        <F.ContainerFollower key={getNewId()}>

          <F.ContainerInfoLogin>
            <F.IconArrow src={arrow} alt="arrow" />
            <F.AvatarFollower src={value.avatar_url} alt={value.login} />
            <F.NameLogin>
              {`#${value.login}`}
            </F.NameLogin>
          </F.ContainerInfoLogin>

          <Link id={value.login} to="/followers/user">
            <F.IconArrowRight
              onClick={handleClick}
              id={value.login}
              src={arrowRight}
              alt="arrow right"
            />
          </Link>
        </F.ContainerFollower>
      ))
      : infoFollowing.map((value) => (
        <F.ContainerFollower key={getNewId()}>

          <F.ContainerInfoLogin>
            <F.IconArrow src={arrow} alt="arrow" />
            <F.AvatarFollower src={value.avatar_url} alt={value.login} />
            <F.NameLogin>{`#${value.login}`}</F.NameLogin>
          </F.ContainerInfoLogin>

          <Link to="/following/user">
            <F.IconArrowRight
              id={value.login}
              onClick={handleClick}
              src={arrowRight}
              alt="arrow right"
            />
          </Link>
        </F.ContainerFollower>
      ))

  );
}

export default Follower;
