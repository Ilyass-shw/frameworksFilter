import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import FrameworkItem from '../frameworkItem/FrameworkItem';
import { List } from './FrameworksListStyle';

const FrameworksList = ({ searchResults }) => {
  return (
    <List>
      {searchResults.length > 0 ? (
        searchResults.map((item) => (
          <FrameworkItem key={nanoid()} item={item} />
        ))
      ) : (
        <p>No results found.</p>
      )}
    </List>
  );
};

export default FrameworksList;
