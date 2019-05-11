import styled from "styled-components";
import { boxShadow } from "../style-util";

const FilterBarSquareWrapper = styled.div`
  height: 120px;
  float: left;
  text-align: center;
  position: relative;
  width: 100%;
  border-width: 0px 1px 0px 1px;
  border-style: solid;
  border-color: #b2b2b2;
  cursor: pointer;

  .title {
    background-color: #6e7073;
    color: #fff;
    font-weight: 200;
    letter-spacing: 4px;
  }

  .current {
    display: table;
    height: 65px;
    overflow: hidden;
    width: 100%;
  }

  .current .summary {
    display: table-cell;
    vertical-align: middle;
  }

  .toggle {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .toggleIcon {
    fontsize: 20;
    color: #999;
  }

  .toggleIconActive {
    fontsize: 20;
    color: #1e7fbf;
  }
`;

export default FilterBarSquareWrapper;
