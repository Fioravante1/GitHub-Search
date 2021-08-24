import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
// import requestApi from '../services/httpServise';

function Provider({ children }) {
  const [data, setData] = useState();
  const [valueInputUser, setValueInputUser] = useState('');

  const objContext = {
    data,
    setData,
    valueInputUser,
    setValueInputUser,
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
