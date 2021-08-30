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
    <BI.BioContainer>
      <BI.ContainerInfoBio>
        <img src={arrow} alt="arrow" />
        <h1>Bio</h1>
      </BI.ContainerInfoBio>
      <p>{pathname === '/home' ? data.bio : dataFollo.bio}</p>
    </BI.BioContainer>
  );
}

export default Bio;
