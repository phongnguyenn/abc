import styled from "styled-components";

const MarketSummaryWrapper = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const DateRangeSummaryWrapper = styled.div`
  .season {
    font-weight: bold;
    font-size: 16px;
    width: auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .seasonDates {
    text-transform: none;
    font-size: 14px;
  }

  .dates {
    text-transform: none;
    font-size: 16px;
  }

  .date {
    font-family: Arial, sans-serif !important;
    font-weight: bold;
  }
`;

const KpiSummaryWrapper = styled.div`
  .kpi {
    font-weight: bold;
    font-size: 16px;
  }
`;

const GeneralFiltersSummaryWrapper = styled.div`
  display: inline-block; // for non Webkit browsers
  display: -webkit-box; // needed for the effect to cut off
  -webkit-line-clamp: 2; // line to cut off
  -webkit-box-orient: vertical;

  .amenityTitle {
    font-weight: bold;
    font-size: 16px;
  }

  .amenityValue {
    font-style: italic;
    font-size: 14px;
  }
`;

export {
  MarketSummaryWrapper,
  DateRangeSummaryWrapper,
  KpiSummaryWrapper,
  GeneralFiltersSummaryWrapper
};
