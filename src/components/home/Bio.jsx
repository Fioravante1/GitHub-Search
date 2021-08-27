import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import * as BI from './styles';
import arrow from '../../Assets/arrow.png';

function Bio() {
  const { data, dataFollo } = useContext(Context);

  const history = useHistory();
  const { location: { pathname } } = history;

  return (
    pathname === '/home'
      ? (
        <BI.BioContainer>
          <BI.ContainerInfoBio>
            <img src={arrow} alt="arrow" />
            <h1>Bio</h1>
          </BI.ContainerInfoBio>
          <p>{data.bio}</p>
        </BI.BioContainer>
      )
      : (
        <BI.BioContainer>
          <BI.ContainerInfoBio>
            <img src={arrow} alt="arrow" />
            <h1>Bio</h1>
          </BI.ContainerInfoBio>
          <p>{dataFollo.bio}</p>
        </BI.BioContainer>
      )
  );
}

export default Bio;
