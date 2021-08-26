import React from 'react';
import HeaderSeg from '../components/headerseguidores/HeaderSeg';
import Footer from '../components/home/Footer';
import FollowingComponent from '../components/seguindo/Following';

function Following() {
  return (
    <div>
      <HeaderSeg />
      <FollowingComponent />
      <Footer />
    </div>
  );
}

export default Following;
