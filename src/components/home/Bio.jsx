import React, { useContext } from 'react';
import Context from '../../context/Context';
import { BioContainer } from './styles';
import arrow from '../../Assets/arrow.png';

function Bio() {
  const { data } = useContext(Context);
  return (
    <BioContainer>
      <div className="container__bio">
        <img src={arrow} alt="arrow" />
        <h1>Bio</h1>
      </div>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text.
        It has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old.
        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
        looked up one of the more obscure Latin words, consectetur.
      </p>
      <p>{data.bio}</p>
    </BioContainer>
  );
}

export default Bio;
