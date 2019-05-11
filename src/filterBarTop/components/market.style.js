import styled from "styled-components";

const MarketWrapper = styled.div`
  
  width: 200px;
  padding: 5px;
  margin: 5px;
  border: 1px solid #fff;
  cursor: pointer;

   &.active {
    border: 1px solid darkgrey;
     border-radius: 5px;
    background-color: #DEE5ED;
  }

  &:hover {
    border: 1px solid darkgrey;
     border-radius: 5px;
}
`;

export default MarketWrapper;
