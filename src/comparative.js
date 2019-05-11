import React, { Component } from "react";
import { render } from "react-dom";
import {
  Header as SemanticHeader,
  Grid,
  Segment,
  Divider
} from "semantic-ui-react";
import {
  Radio,
  Alert,
  Icon,
  Button,
  Table,
  Tooltip,
  Row,
  Col,
  notification,
  Dropdown,
  Layout
} from "antd";
import HeaderWithFloat from "./headerWithFloat";
import "antd/dist/antd.css";
import "./test.css";
import { currentMarket } from "./lookups";
import {
  tableSampleColumns,
  tableCellHightLights,
  tableSampleRows
} from "./tableSampleData";
import {
  tableSampleColumns as unitColumns,
  tableCellHightLights as unitHighlights,
  tableSampleRows as unitRows
} from "./unitSampleData";
import {
  weekLineDataProcessedFormat,
  weekBarDataProcessedFormat
} from "./weekLineData";
import { lineChartOptions, barChartOptions } from "./chartOptions";
import { Line, Bar } from "react-chartjs-2";
import { getOddEvenTableRow } from "./tableHelpers";
import { ComparativeViewWrapper } from "./comparative.style";
import { prepareGroupingsMenu } from "./groupingOptionsMenu";
import FilterBarTop from "./filterBarTop/filterBarTop";
import * as dp from "./filterBarTop/datePickerTypes";
require("chartjs-plugin-datalabels");

const { Header, Footer, Content } = Layout;
const ButtonGroup = Button.Group;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { lookups: currentMarketLookUps } = currentMarket;

export default class ComparativeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOccupancyChartType: "line",
      selectedTableGroupingType: "Bedrooms",
      selectedChartScale: "week",
      filters: {
        activeMarket: {
          name: "Panama City Beach",
          key: "guid-pcb"
        },
        dateRange: {
          pickerType: dp.DATEPICKERTYPES_CUSTOM,
          seasonId: undefined,
          start: new Date(2018, 2, 1),
          end: new Date(2018, 2, 3)
        },
        compareTo: {
          pickerType: dp.DATEPICKERTYPES_CUSTOM,
          seasonId: undefined,
          start: new Date(2017, 3, 1),
          end: new Date(2017, 3, 15)
        },
        activeKpi: "occupancy-rate",
        generalFilters: {
          bedrooms: ["1", "3"],
          sleeps: ["2", "5"],
          locations: ["Waterfront"],
          propertyStructure: ["Condo"],
          amenities: ["PrivatePool", "AirConditioning"],
          areas: ["Watercolor"]
        },
        pendingFilterChanges: {}
      }
    };

    this.onSelectedOccupancyChartTypeChange = this.onSelectedOccupancyChartTypeChange.bind(
      this
    );

    this.onChartScaleChange = this.onChartScaleChange.bind(this);
    this.onTableGroupingTypeChage = this.onTableGroupingTypeChage.bind(this);
  }

  onChartScaleChange = e => {
    this.setState({
      selectedChartScale: e.target.value
    });
  };

  onTableGroupingTypeChage = (item) => {
    const { key } = item;
    this.setState({
      selectedTableGroupingType: key
    });
  };

  onSelectedOccupancyChartTypeChange = e => {
    if (e.target.value === "export") {
      notification.open({
        message: "About Export",
        description: "This will show an export data modal."
      });
    } else {
      this.setState({
        selectedOccupancyChartType: e.target.value
      });
    }
  };

  render() {
    const {
      selectedOccupancyChartType,
      selectedChartScale,
      selectedTableGroupingType,
      filters
    } = this.state;

    return (
      <div>
        <FilterBarTop filters={filters} />
        <Content style={{ padding: "20px 50px" }}>
          <ComparativeViewWrapper>
            <Segment>
              <i className="user outline" />

              <Row>
                <Col span={12}>
                  {" "}
                  <div className="actionButtonGroups">
                    <RadioGroup
                      value={selectedChartScale}
                      onChange={this.onChartScaleChange}
                    >
                      <RadioButton value="day">
                        <Icon type="bulb" /> Day
                      </RadioButton>
                      <RadioButton value="week">
                        <Icon type="hourglass" /> Week
                      </RadioButton>
                      <RadioButton value="month">
                        <Icon type="flag" /> Month
                      </RadioButton>
                    </RadioGroup>
                  </div>
                </Col>
                <Col span={10}>
                  {" "}
                  <div
                    className="actionButtonGroups"
                    style={{ textAlign: "right" }}
                  >
                    <RadioGroup
                      value={selectedOccupancyChartType}
                      onChange={this.onSelectedOccupancyChartTypeChange}
                    >
                      <RadioButton value="line">
                        <Icon type="area-chart" /> Line Chart
                      </RadioButton>
                      <RadioButton value="bar">
                        <Icon type="bar-chart" /> Bar Chart
                      </RadioButton>
                    </RadioGroup>
                  </div>
                </Col>
                <Col span={2}>
                  {" "}
                  <div
                    className="actionButtonGroups"
                    style={{ textAlign: "right" }}
                  >
                    <RadioGroup
                      onChange={this.onSelectedOccupancyChartTypeChange}
                    >
                      <RadioButton value="export">
                        <Icon type="download" /> Export
                      </RadioButton>
                    </RadioGroup>
                  </div>
                </Col>
              </Row>
              <Divider />
              <div className="chartHolder">
                {selectedOccupancyChartType === "line" && (
                  <Line
                    height={100}
                    options={lineChartOptions}
                    data={weekLineDataProcessedFormat}
                  />
                )}

                {selectedOccupancyChartType === "bar" && (
                  <Bar
                    height={100}
                    options={barChartOptions}
                    data={weekBarDataProcessedFormat}
                  />
                )}
              </div>
              <Divider />
              <Row>
                <Col span={24}>
                  <div className="groupingSwitcher">
                    <label>Grouping:</label>
                    <Dropdown
                      overlay={prepareGroupingsMenu(
                        selectedTableGroupingType,
                        this.onTableGroupingTypeChage
                      )}
                      trigger={["click"]}
                    >
                      <a className="ant-dropdown-link" href="#">
                        {selectedTableGroupingType} <Icon type="down" />
                      </a>
                    </Dropdown>
                  </div>
                </Col>
              </Row>
              <Divider />
              <Table
                rowClassName="mainTableRow"
                columns={tableSampleColumns}
                dataSource={tableSampleRows}
                pagination={false}
                expandedRowRender={record => (
                  <div className="subTableWrapper">
                    <Table
                      columns={unitColumns}
                      dataSource={unitRows}
                      pagination={false}
                      showHeader={true}
                      rowClassName={(record, index) => {
                        return getOddEvenTableRow(index);
                      }}
                    />
                  </div>
                )}
              />
              <Alert
                message="Some Results Not Shown"
                description="You dont have any 3 or 4 bedroom houses so we are unable to show you these properties."
                type="info"
                showIcon
              />
            </Segment>
          </ComparativeViewWrapper>
        </Content>
      </div>
    );
  }
}
