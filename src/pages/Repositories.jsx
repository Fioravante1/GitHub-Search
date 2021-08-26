import React from 'react';
import HeaderRepo from '../components/headerrepo/HeaderRepo';
import Footer from '../components/home/Footer';
import Repos from '../components/repositorio/Repo';

function Repositories() {
  return (
    <>
      <HeaderRepo />
      <div>
        <Repos />
        <Footer />
      </div>
    </>
  );
}

export default Repositories;
