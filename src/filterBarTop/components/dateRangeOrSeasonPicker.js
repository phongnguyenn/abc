import React, { Component } from "react";
import { Radio, Form, Select, Popconfirm } from "antd";
import {
  DateRangeOrSeasonWrapper,
  DayPickerWidgetActiveWrapper,
  DayPickerWidgetDisabledWrapper
} from "./datePicker.style";
import * as dp from "../datePickerTypes";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
const dateFormat = "YYYY/MM/DD";
const FormItem = Form.Item;
const Option = Select.Option;

class DateRangeOrSeasonPicker extends Component {
  static defaultProps = {
    allowReset: false
  };
  constructor(props) {
    super(props);

    this.state = {
      dateRange: Object.assign({}, props.dateRange),
      from: props.dateRange.start,
      to: props.dateRange.end,
      dateChanged: false,
      seasons: props.seasons
    };

    this.handleDatePickerTypeChange = this.handleDatePickerTypeChange.bind(
      this
    );

    this.handleSeasonSelectChange = this.handleSeasonSelectChange.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.resetCustomDates = this.resetCustomDates.bind(this);
  }

  resetCustomDates() {
    this.setState({ from: undefined, to: undefined });
    this.handleRangePickerChange(undefined, undefined);
  }

  handleDatePickerTypeChange(e) {
    const { target } = e;
    const { onPickerChanges } = this.props;
    const { dateRange } = this.state;

    this.setState(
      {
        dateRange: Object.assign(dateRange, {
          pickerType: target.value
        })
      },
      function() {
        onPickerChanges(this.state.dateRange);
      }
    );
  }

  handleSeasonSelectChange(value) {
    const { onPickerChanges } = this.props;
    const { seasons, dateRange } = this.state;
    var selectedSeason = seasons.find(s => s.guid === value);

    if (selectedSeason) {
      this.setState(
        {
          dateRange: Object.assign(dateRange, {
            seasonId: selectedSeason.guid
          })
        },
        function() {
          onPickerChanges(this.state.dateRange);
        }
      );
    }
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);

    this.setState({ from: range.from, to: range.to }, function() {
      if (range.from !== undefined && range.to !== undefined) {
        this.handleRangePickerChange(range.from, range.to);
      }
    });
  }

  handleRangePickerChange(startDate, endDate) {
    const { onPickerChanges } = this.props;
    const { dateRange } = this.state;

    this.setState(
      {
        dateRange: Object.assign(dateRange, {
          start: startDate,
          end: endDate,
          seasonId: undefined
        })
      },
      function() {
        onPickerChanges(this.state.dateRange);
      }
    );
  }

  render() {
    console.dir(this.props);
    const { allowReset } = this.props;
    const { dateRange, seasons, from, to } = this.state;
    const { pickerType, seasonId } = dateRange;
    const dayPickerModifiers = { start: from, end: to };
    const rangeSet = from !== undefined && to !== undefined;

    return (
      <DateRangeOrSeasonWrapper>
        <h3>Select season or set custom date range.</h3>
        {allowReset && (
          <FormItem>
            <Radio
              onChange={this.handleDatePickerTypeChange}
              checked={pickerType === dp.DATEPICKERTYPES_NONE}
              name="pickerType"
              id="pickerType"
              value={dp.DATEPICKERTYPES_NONE}
            >
              None (reset and remove)
            </Radio>
          </FormItem>
        )}
        <FormItem>
          <Radio
            onChange={this.handleDatePickerTypeChange}
            checked={pickerType === dp.DATEPICKERTYPES_SEASON}
            name="pickerType"
            id="pickerType"
            value={dp.DATEPICKERTYPES_SEASON}
          >
            Select from a season
          </Radio>
          <br />

          <Select
            defaultValue={seasonId !== undefined ? seasonId : ""}
            disabled={pickerType !== dp.DATEPICKERTYPES_SEASON}
            showSearch={false}
            style={{ width: 500 }}
            placeholder="Select a season"
            optionFilterProp="children"
            onChange={this.handleSeasonSelectChange}
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            {seasons &&
              seasons.map((season, index) => (
                <Option key={season.guid}>
                  {season.seasonName}
                  &nbsp; ({season.start.format("MMM Do YYYY")} to{" "}
                  {season.end.format("MMM Do YYYY")})
                </Option>
              ))}
          </Select>
        </FormItem>
        <FormItem>
          <Radio
            onChange={this.handleDatePickerTypeChange}
            checked={pickerType === dp.DATEPICKERTYPES_CUSTOM}
            name="pickerType"
            id="pickerType"
            value={dp.DATEPICKERTYPES_CUSTOM}
          >
            <span>Set a custom date range</span>{" "}
            {pickerType === dp.DATEPICKERTYPES_CUSTOM &&
              rangeSet && (
                <Popconfirm
                  title="Are you sure?"
                  onConfirm={this.resetCustomDates}
                  okText="Yes"
                  cancelText="No"
                >
                  [<a href="#">Reset</a>]
                </Popconfirm>
              )}
          </Radio>
          <br />
          {pickerType === dp.DATEPICKERTYPES_CUSTOM && (
            <DayPickerWidgetActiveWrapper>
              <DayPicker
              month={from}
                className="Selectable"
                numberOfMonths={2}
                selectedDays={[from, { from, to }]}
                modifiers={dayPickerModifiers}
                onDayClick={this.handleDayClick}
              />
            </DayPickerWidgetActiveWrapper>
          )}
          {pickerType !== dp.DATEPICKERTYPES_CUSTOM && (
            <DayPickerWidgetDisabledWrapper>
              <div className="container">
                <DayPicker
                  disabledDays={[0, 1, 2, 3, 4, 5, 6]}
                  className="Selectable"
                  numberOfMonths={2}
                  modifiers={dayPickerModifiers}
                />
              </div>
            </DayPickerWidgetDisabledWrapper>
          )}
        </FormItem>
      </DateRangeOrSeasonWrapper>
    );
  }
}

export default DateRangeOrSeasonPicker;
