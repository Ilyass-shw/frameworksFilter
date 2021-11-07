import React from 'react';
import { ItemCard, ItemTitle, ItemDescription } from './FrameworkItemStyle';

const FrameworkItem = ({ item }) => {
  return (
    <ItemCard>
      <ItemTitle>{item.title}</ItemTitle>
      <ItemDescription>{item.description}</ItemDescription>
    </ItemCard>
  );
};

export default FrameworkItem;
