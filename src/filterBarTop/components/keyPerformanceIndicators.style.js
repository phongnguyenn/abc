import styled from "styled-components";

const KeyPerformanceIndicatorsWrapper = styled.div`
  background-color: #ffffff;

`;

const KpiWrapper = styled.div`
  width: 200px;
  padding: 5px;
  margin: 5px;
  border: 1px solid #fff;
  cursor: pointer;

  &.active {
    border: 1px solid darkgrey;
    border-radius: 5px;
    background-color: #dee5ed;
  }

  &:hover {
    border: 1px solid darkgrey;
    border-radius: 5px;
  }
`;

export { KeyPerformanceIndicatorsWrapper, KpiWrapper };
