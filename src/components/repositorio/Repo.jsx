import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import requestApi from '../../services/httpServise';
import arrow from '../../Assets/arrow.png';
import star from '../../Assets/star.png';
import * as R from './styles';
import getNewId from '../../services/idService';

function Repo() {
  const { infoRepos, valueInputUser, setInfoRepos } = useContext(Context);

  const history = useHistory();
  const { location: { pathname } } = history;

  useEffect(() => {
    async function requestRepos() {
      if (pathname === '/repositories') {
        const responseRepos = await requestApi(`/${valueInputUser}/repos`) || [];
        setInfoRepos(responseRepos);
      }
    }
    requestRepos();
  }, [valueInputUser]);

  return (
    infoRepos.map((value) => (
      <R.ContainerRepo key={getNewId()}>

        <R.ContainerName>
          <R.ImageIcon src={arrow} alt="arrow" />
          <R.NameRepo>
            {value.name}
          </R.NameRepo>
        </R.ContainerName>

        <R.DescriptionRepo>{value.description}</R.DescriptionRepo>

        <R.ConteinerStar>
          <R.ImageIcon src={star} alt="star" />
          <R.CountStar>{value.stargazers_count}</R.CountStar>
        </R.ConteinerStar>

      </R.ContainerRepo>

    ))
  );
}

export default Repo;
