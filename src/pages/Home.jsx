import React from 'react';
import PictureUser from '../components/home/PictureUser';
import Header from '../components/header/Header';
import InfoUser from '../components/home/InfoUser';
import DataUser from '../components/home/DataUser';
import Bio from '../components/home/Bio';
import Footer from '../components/home/Footer';

function Home() {
  return (
    <>
      <Header />
      <PictureUser />
      <InfoUser />
      <DataUser />
      <Bio />
      <Footer />
    </>
  );
}

export default Home;
