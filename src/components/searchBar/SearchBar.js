import React from 'react';
import store from '../../store';
import { searchTermUpdated } from '../../store/searchSlice';
import { Input } from './SearchBarStyle';

const SearchBar = () => {
  const onChangeSearchTerm = (e) => {
    store.dispatch(searchTermUpdated(e.target.value));
  };

  return (
    <>
      <Input
        placeholder="Search for a framework..."
        onChange={onChangeSearchTerm}
      />
    </>
  );
};

export default SearchBar;
