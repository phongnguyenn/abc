import styled from 'styled-components';
import { palette } from 'styled-theme';

const ComparativeViewWrapper = styled.div`

  .actionButtonGroups {
    width: 100%
  }
 
  .actionButtonGroups .ant-radio-button-wrapper {
    color: #1e7fbf;
  }

  .groupingSwitcher {
    margin-right: 10px;
    text-align: left;
  }

  .groupingSwitcher label {
    padding-right: 5px;
    font-weight: bold;
    font-size: 18px;
  }

  .groupingSwitcher .ant-dropdown-link {
    font-size: 18px;
  }

  .groupingCurrent {
    text-decoration: underline;
    font-size: 18px;
  }

  .ant-table-row-hover {
    background-color: pink !important;
  }

`;

export { ComparativeViewWrapper };
