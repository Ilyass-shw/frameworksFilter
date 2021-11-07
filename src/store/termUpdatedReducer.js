import items from '../pages/Items';

const termUpdatedReducer = (state, action) => {

  // update searchTerm in store
  state.searchTerm = action.payload;
  
  // update list of the matching results in store
  state.searchResults = items.filter((obj) =>
    Object.values(obj).some((values) =>
      values.toLowerCase().includes(state.searchTerm.toLowerCase()),
    ),
  );
};

export default termUpdatedReducer;
