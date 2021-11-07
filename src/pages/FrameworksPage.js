import React from 'react';
import { useSelector } from 'react-redux';

import FrameworksList from '../components/frameworksList/FrameworksList';
import SearchBar from '../components/searchBar/SearchBar';

const FrameworksPage = () => {
  const searchResults = useSelector((state) => state.search.searchResults);
  return (
    <>
      <SearchBar />
      <FrameworksList searchResults={searchResults} />
    </>
  );
};

export default FrameworksPage;
