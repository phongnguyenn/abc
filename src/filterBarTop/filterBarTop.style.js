import styled from "styled-components";
import { boxShadow } from "../style-util";

const FilterBarTopWrapper = styled.div`
  ${boxShadow("0 8px 2px -2px  rgba(0,0,0,0.15)")};
  background-color: #ffffff;

  flex-shrink: 0;

  z-index: 1001;

  i {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.65);
  }

  .title {
    background-color: #6e7073;
    text-transform: uppercase;
    color: #fff;
    font-weight: bolder;
    padding: 5px;
  }

  .activeBox {
    ${boxShadow("0 8px 2px 2px  rgba(0,0,0,0.1)")};
    
  }
`;

export default FilterBarTopWrapper;
