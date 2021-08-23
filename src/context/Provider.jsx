import React from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  return (
    <Context.Provider>{children}</Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;