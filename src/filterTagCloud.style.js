import styled from 'styled-components';
import { palette } from 'styled-theme';

const FilterTagCloudOuter = styled.div`
  clear: both;
  min-width: 1000px;
  height: 35px;
  margin-left: -5px;
  margin-top: -10px
`;

const FilterTagCloudInner = styled.div`

  .filterTypeGroup {
    border: 1px solid #ccc;
    border-radius: 5px;
    float: left;
    padding: 5px;
    margin: 5px;
  }

  .groupName {
    display: block;
    float: left;
    margin-right: 10px;
    padding-top: 3px;
  }

`;

export { FilterTagCloudInner, FilterTagCloudOuter };
