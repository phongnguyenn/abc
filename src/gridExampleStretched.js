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
  Menu,
  Icon,
  Select,
  Button,
  Layout,
  Table,
  DatePicker,
  BackTop,
  Tabs
} from "antd";
import PageHeader from "./pageHeader";
import HeaderWithFloat from "./headerWithFloat";
import FilterTagCloud from "./filterTagCloud";
import "antd/dist/antd.css";
import "./test.css";
import { rawLookups, currentMarket } from "./lookups";
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
import { pmColor, marketColor, regionColor } from "./colors";
import { ranges } from "./sampleRanges";
import { Line, Bar } from "react-chartjs-2";
import { getOddEvenTableRow } from "./tableHelpers";
import { LogoWithChart } from "./logoWithChart";
import { LogoWithoutChart } from "./logoWithoutChart";
import TopNavigation from "./topNavigation/topNavigation";
import ComparativeView from "./comparative";
import { TabsWrapper } from "./tabsWrapper.style";
require("chartjs-plugin-datalabels");
const ButtonGroup = Button.Group;
const { Header, Footer, Content } = Layout;
const { RangePicker, MonthPicker } = DatePicker;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const { lookups: currentMarketLookUps } = currentMarket;
const TabPane = Tabs.TabPane;

export default class GridExampleStretched extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BackTop />
        <TopNavigation onSubMenuChange={this.onSubMenuChange} />

        <TabsWrapper>
          <Tabs defaultActiveKey="comparative" animated={false}>
            <TabPane
              tab={
                <span>
                  <Icon type="eye-o" />Details
                </span>
              }
              key="comparative"
            >
              <ComparativeView />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="pushpin" />My Markets
                </span>
              }
              key="market"
            >
              <Segment>My Markets</Segment>
            </TabPane>
          </Tabs>
        </TabsWrapper>

        <Footer>2018 VRMarket Data</Footer>
      </div>
    );
  }
}
