import styled from 'styled-components';

export const ItemCard = styled.li`
  width: 100%;
  border: 1px solid #2f1793;
  border-radius: 2px;
  padding: 12px;
  background-color: white;
  margin: 20px 0;

  @media (min-width: 780px) {
    max-width: 29vw;
    margin: 20px 4px;
  }
`;

export const ItemTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: #222222;
`;
export const ItemDescription = styled.p`
  font-size: 13px;
  line-height: 1.5;
  color: #68717e;
`;
