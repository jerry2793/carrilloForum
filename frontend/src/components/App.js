import React from 'react';
import Header from './appbar/index';

export default ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
