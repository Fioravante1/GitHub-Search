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
    pathname === '/home'
      ? (
        <HO.InfoContainer>

          <HO.ContainerName className="container__name">
            <img src={arrow} alt="arrow" />
            <HO.NameUser>{data.name}</HO.NameUser>
          </HO.ContainerName>

          <p>{data.email}</p>
          <p>{data.location}</p>

        </HO.InfoContainer>
      )
      : (
        <HO.InfoContainer>

          <HO.ContainerName>
            <img src={arrow} alt="arrow" />
            <HO.NameUser>{dataFollo.name}</HO.NameUser>
          </HO.ContainerName>

          <p>{dataFollo.email}</p>
          <p>{dataFollo.location}</p>

        </HO.InfoContainer>
      )
  );
}

export default InfoUser;
