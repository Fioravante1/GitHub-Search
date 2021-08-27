import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [valueInputUser, setValueInputUser] = useState('');
  const [userFollo, setUserFollo] = useState('');
  const [idUser, setIdUser] = useState('');
  const [data, setData] = useState({});
  const [infoFollowers, setInfoFollowers] = useState([]);
  const [infoFollowing, setInfoFollowing] = useState([]);
  const [infoRepos, setInfoRepos] = useState([]);
  const [dataFollo, setDataFoloo] = useState({});

  const objContext = {
    data,
    setData,
    valueInputUser,
    setValueInputUser,
    infoFollowers,
    setInfoFollowers,
    infoFollowing,
    setInfoFollowing,
    infoRepos,
    setInfoRepos,
    setUserFollo,
    userFollo,
    dataFollo,
    setDataFoloo,
    idUser,
    setIdUser,
  };

  return (
    <Context.Provider value={objContext}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
