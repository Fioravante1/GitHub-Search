import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import * as HO from './styles';
import arrow from '../../Assets/arrow.png';

function InfoUser() {
  const { data, dataFollo } = useContext(Context);

  const history = useHistory();
  const { location: { pathname } } = history;

  return (

    <HO.InfoContainer>

      <HO.ContainerName className="container__name">
        <img src={arrow} alt="arrow" />
        <HO.NameUser>{pathname === '/home' ? data.name : dataFollo.name}</HO.NameUser>
      </HO.ContainerName>

      <p>{pathname === '/home' ? data.email : dataFollo.email}</p>
      <p>{pathname === '/home' ? data.location : dataFollo.location}</p>

    </HO.InfoContainer>
  );
}

export default InfoUser;
