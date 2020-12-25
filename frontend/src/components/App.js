import React from 'react';
import Header from './appbar';

export default ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
