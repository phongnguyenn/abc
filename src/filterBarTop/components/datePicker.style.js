import styled from "styled-components";

const DateRangeOrSeasonWrapper = styled.div`
  background-color: #ffffff;
  width: 600px;

  .resetCustomDates {
    cursor: pointer;
    text-decoration: underline;
  }

`;

const DayPickerWidgetActiveWrapper = styled.div`
  .Selectable
    .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
    padding: 0 !important;
  }
  .Selectable .DayPicker-Month {
    width: 250px !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`;

const DayPickerWidgetDisabledWrapper = styled.div`

  color: grey;
  cursor: not-allowed !important;

  .Selectable
    .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
    cursor: not-allowed !important;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
    padding: 0 !important;
    cursor: not-allowed !important;
  }
  .Selectable .DayPicker-Month {
    width: 250px !important;
    cursor: not-allowed !important;
  }

  .Selectable .DayPicker-Day--today {
    color: grey;
    cursor: not-allowed !important;
  }

  .DayPicker-NavButton {
    display: none !important;
  }

  opacity: .5;
`;

export {
  DateRangeOrSeasonWrapper,
  DayPickerWidgetActiveWrapper,
  DayPickerWidgetDisabledWrapper
};
