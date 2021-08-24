import React from 'react';
import { Link } from 'react-router-dom';
import { FooterContainer } from './styles';
import home from '../../Assets/home.png';
import repos from '../../Assets/repos.png';
import seguidores from '../../Assets/seguidores.png';
import seguindo from '../../Assets/seguindo.png';

function Footer() {
  return (
    <FooterContainer>
      <Link to="/home">
        <img src={home} alt="home" />
      </Link>
      <Link to="/repositories">
        <img src={repos} alt="repos" />
      </Link>
      <Link to="/followers">
        <img src={seguidores} alt="seguidores" />
      </Link>
      <Link to="/following">
        <img src={seguindo} alt="seguindo" />
      </Link>
    </FooterContainer>
  );
}

export default Footer;
