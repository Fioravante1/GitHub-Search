import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../context/Context';
import exit from '../../Assets/exit.png';
import { HeaderContainer } from './styles';

function Header() {
  const { data } = useContext(Context);

  return (
    <HeaderContainer>
      <p>{`#${data.login}`}</p>

      <div className="conteiner__exit">
        <Link to="/">
          Sair
        </Link>
        <Link to="/">
          <img src={exit} alt="sair" />
        </Link>
      </div>

    </HeaderContainer>
  );
}

export default Header;