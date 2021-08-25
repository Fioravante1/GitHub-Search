import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import voltar from '../../Assets/voltar.png';
import * as H from './styles';

function HeaderSeg() {
  const { data } = useContext(Context);

  const history = useHistory();

  const { location: { pathname } } = history;
  return (
    <H.Header>
      <Link to="/home">
        <H.Img src={voltar} alt="voltar" />
      </Link>

      <H.QuantityFollowers>
        {
          pathname === '/followers'
            ? `${data.followers} seguidores`
            : `${data.following} seguidores`
        }
      </H.QuantityFollowers>
    </H.Header>
  );
}

export default HeaderSeg;
