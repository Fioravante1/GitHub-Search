import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import * as DS from './styles';

function DataUser() {
  const { data, dataFollo } = useContext(Context);

  const history = useHistory();
  const { location: { pathname } } = history;

  return (
    <DS.DataContainer>

      <DS.ContainerDataUser>
        <h2>{pathname === '/home' ? data.followers : dataFollo.followers}</h2>
        <p>Seguidores</p>
      </DS.ContainerDataUser>

      <DS.ContainerDataUser>
        <h2>{pathname === '/home' ? data.following : dataFollo.following}</h2>
        <p>Seguindo</p>
      </DS.ContainerDataUser>

      <DS.ContainerDataUser>
        <h2>{pathname === '/home' ? data.public_repos : dataFollo.public_repos}</h2>
        <p>Repos</p>
      </DS.ContainerDataUser>

    </DS.DataContainer>

  );
}

export default DataUser;
