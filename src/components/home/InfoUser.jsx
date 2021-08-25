import React, { useContext } from 'react';
import Context from '../../context/Context';
import { InfoContainer } from './styles';
import arrow from '../../Assets/arrow.png';

function InfoUser() {
  const { data } = useContext(Context);
  return (
    <InfoContainer>
      <div className="container__name">
        <img src={arrow} alt="arrow" />
        <h1>{data.name}</h1>
      </div>
      <p>{data.email}</p>
      <p>{data.location}</p>
    </InfoContainer>
  );
}

export default InfoUser;
