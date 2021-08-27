import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import exit from '../../Assets/exit.png';
import salvar from '../../Assets/save.png';
import * as HE from './styles';
// import requestApi from '../../services/httpServise';

function Header() {
  const {
    data,
    setData,
    dataFollo,
    setUserFollo,
    idUser,
  } = useContext(Context);

  const history = useHistory();
  const { location: { pathname } } = history;

  function handleClick() {
    setData(dataFollo);
    setUserFollo(idUser);
  }

  return (
    pathname === '/home'
      ? (
        <HE.HeaderContainer>

          <p>{`#${data.login}`}</p>

          <HE.ContainerExitSave>

            <Link to="/">
              Sair
            </Link>

            <Link to="/">
              <img src={exit} alt="sair" />
            </Link>

          </HE.ContainerExitSave>

        </HE.HeaderContainer>
      )
      : (
        <HE.HeaderContainer>

          <p>{`#${dataFollo.login}`}</p>

          <HE.ContainerExitSave>

            <Link to="/home" onClick={handleClick}>
              Salvar
            </Link>

            <Link to="/home" onClick={handleClick}>
              <img src={salvar} alt="salvar" />
            </Link>

          </HE.ContainerExitSave>

        </HE.HeaderContainer>
      )
  );
}

export default Header;
