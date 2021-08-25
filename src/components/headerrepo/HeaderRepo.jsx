import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../context/Context';
import voltar from '../../Assets/voltar.png';
import * as H from './styles';

function HeaderRepo() {
  const { data } = useContext(Context);

  return (
    <H.Header>
      <Link to="/home">
        <H.Img src={voltar} alt={voltar} />
      </Link>
      <H.QuantityRepo>
        {`${data.public_repos} repositórios`}
      </H.QuantityRepo>
    </H.Header>
  );
}

export default HeaderRepo;
