import React, { useContext } from 'react';
import Context from '../../context/Context';
import { DataContainer } from './styles';

function DataUser() {
  const { data } = useContext(Context);

  return (
    <DataContainer>
      <div className="data__user">
        <h2>{data.followers}</h2>
        <p>Seguidores</p>
      </div>
      <div className="data__user">
        <h2>{data.following}</h2>
        <p>Seguindo</p>
      </div>
      <div className="data__user">
        <h2>{data.public_repos}</h2>
        <p>Repos</p>
      </div>
    </DataContainer>
  );
}

export default DataUser;
