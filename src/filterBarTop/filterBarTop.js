import React, { Component } from "react";
import FilterBarTopWrapper from "./filterBarTop.style";
import uuid from "react-native-uuid";
import { Row, Col, Alert } from "antd";
import FilterSquare from "./filterSquare";
import MarketSelector from "./components/marketSelector";
import DateRangeOrSeasonPicker from "./components/dateRangeOrSeasonPicker";
import KeyPerformanceIndicators from "./components/keyPerformanceIndicators";
// import GeneralFiltersTabbed from "./components/generalFiltersTabbed";
import GeneralFilters from "./components/generalFilters";
import {
  getMarketSummary,
  getDateRangeSummary,
  getKpiSummary,
  getGeneralFiltersSummary
} from "./summaryHelpers";
import JSONPretty from "react-json-pretty";
import { seasons } from "./seasons";
import { comparativeKpis } from "./kpiOptions.js";
import * as dp from "./datePickerTypes";
import moment from "moment";
import * as f from "./filterTypes";
const dateFormat = "YYYY/MM/DD";

class FilterBarTop extends Component {
  constructor(props) {
    super(props);

    this.state = props.filters;

    // this.state = {
    //   activeMarket: {
    //     name: "Panama City Beach",
    //     key: "guid-pcb"
    //   },
    //   dateRange: {
    //     pickerType: dp.DATEPICKERTYPES_CUSTOM,
    //     seasonId: undefined,
    //     start: new Date(2018, 2, 1),
    //     end: new Date(2018, 2, 3)
    //   },
    //   compareTo: {
    //     pickerType: dp.DATEPICKERTYPES_CUSTOM,
    //     seasonId: undefined,
    //     start: new Date(2017, 3, 1),
    //     end: new Date(2017, 3, 15)
    //   },
    //   activeKpi: "occupancy-rate",
    //   generalFilters: {
    //     bedrooms: ["1", "3"],
    //     sleeps: ["2", "5"],
    //     locations: ["Waterfront"],
    //     propertyStructure: ["Condo"],
    //     amenities: ["PrivatePool", "AirConditioning"],
    //     areas: ["Watercolor"]
    //   },
    //   pendingFilterChanges: {}
    // };

    this.updateMarketSelection = this.updateMarketSelection.bind(this);
    this.updateKpiSelection = this.updateKpiSelection.bind(this);
    this.updateGeneralFilters = this.updateGeneralFilters.bind(this);
    this.checkForChangesAfterFilterClose = this.checkForChangesAfterFilterClose.bind(
      this
    );
    this.updateDateRangePickerChanges = this.updateDateRangePickerChanges.bind(
      this
    );

    this.updateCompareToPickerChanges = this.updateCompareToPickerChanges.bind(
      this
    );

    this.checkForChangesAfterKpiClose = this.checkForChangesAfterKpiClose.bind(
      this
    );
  }

  updatePendingFilterChanges(filterType, pendingChange) {
    const { pendingFilterChanges } = this.state;

    this.setState({
      pendingFilterChanges: Object.assign(pendingFilterChanges, {
        [filterType]: pendingChange
      })
    });
  }

  updateMarketSelection(market) {
    this.updatePendingFilterChanges(f.FILTERS_MARKETSELECT, {
      activeMarket: market
    });

    this.setState({ activeMarket: market });
  }

  updateKpiSelection(activeKpi) {
    this.updatePendingFilterChanges(f.FILTERS_KPISELECT, {
      activeKpi: activeKpi
    });

    this.setState({ activeKpi: activeKpi });
  }

  checkForChangesAfterKpiClose(kpi) {
    this.updatePendingFilterChanges(f.FILTERS_MARKETSELECT, {
      activeKpi: kpi
    });

    this.setState({ activeKpi: kpi });
  }

  updateDateRangePickerChanges(dateRange) {
    this.updatePendingFilterChanges(f.FILTERS_DATERANGE, {
      dateRange: dateRange
    });

    this.setState({ dateRange: dateRange });
  }

  updateCompareToPickerChanges(compareTo) {
    this.updatePendingFilterChanges(f.FILTERS_COMPARETO, {
      compareTo: compareTo
    });

    this.setState({ compareTo: compareTo });
  }

  updateGeneralFilters(generalFilters) {
    this.updatePendingFilterChanges(f.FILTERS_GENERAL, {
      generalFilters: generalFilters
    });

    this.setState({ generalFilters: generalFilters });
  }

  checkForChangesAfterFilterClose() {
    const { pendingFilterChanges } = this.state;

    if (
      pendingFilterChanges &&
      Object.keys(pendingFilterChanges).length !== 0
    ) {
      this.setState({
        filterUpdatesToDisplay: pendingFilterChanges
      });
    } else {
      this.setState({ filterUpdatesToDisplay: undefined });
    }
  }

  render() {
    const {
      activeMarket,
      generalFilters,
      dateRange,
      compareTo,
      activeKpi,
      filterUpdatesToDisplay
    } = this.state;

    const marketSummary = getMarketSummary(activeMarket);
    const dateRangeSummary = getDateRangeSummary(dateRange, seasons);
    const compareToSummary = getDateRangeSummary(compareTo, seasons);
    const kpiSummary = getKpiSummary(activeKpi, comparativeKpis);
    const generalFiltersSummary = getGeneralFiltersSummary(generalFilters);

    return (
      <FilterBarTopWrapper>
        <Row>
          <Col span={3}>
            <FilterSquare
              title="Market"
              currentSelections={marketSummary}
              onClose={this.checkForChangesAfterFilterClose}
            >
              <MarketSelector
                activeMarket={activeMarket}
                onMarketSelectionChange={this.updateMarketSelection}
              />
            </FilterSquare>
          </Col>
          <Col span={3}>
            <FilterSquare
              title="Date Range"
              currentSelections={dateRangeSummary}
              onClose={this.checkForChangesAfterFilterClose}
            >
              <DateRangeOrSeasonPicker
                seasons={seasons}
                dateRange={dateRange}
                onPickerChanges={this.updateDateRangePickerChanges}
              />
            </FilterSquare>
          </Col>
          <Col span={3}>
            <FilterSquare
              title="Compare To"
              currentSelections={compareToSummary}
              onClose={this.checkForChangesAfterFilterClose}
            >
              <DateRangeOrSeasonPicker
                allowReset={true}
                seasons={seasons}
                dateRange={compareTo}
                onPickerChanges={this.updateCompareToPickerChanges}
              />
            </FilterSquare>
          </Col>
          <Col span={3}>
            <FilterSquare
              title="KPI"
              currentSelections={kpiSummary}
              onClose={this.checkForChangesAfterFilterClose}
            >
              <KeyPerformanceIndicators
                kpis={comparativeKpis}
                activeKpi={activeKpi}
                onKpiSelectionChange={this.updateKpiSelection}
              />
            </FilterSquare>
          </Col>
          <Col span={12}>
            <FilterSquare
              title="Filters"
              currentSelections={generalFiltersSummary}
              onClose={this.checkForChangesAfterFilterClose}
            >
              <GeneralFilters
                filters={generalFilters}
                onFilterChanges={this.updateGeneralFilters}
              />
            </FilterSquare>
          </Col>
        </Row>
        {/*{filterUpdatesToDisplay && (
          <Alert
            message="DEBUG: Pending Filter Updates (changes here would be sent to server for fresh data) "
            description={
              <JSONPretty id="json-pretty" json={filterUpdatesToDisplay} />
            }
            type="info"
            showIcon
          />
        )}*/}
      </FilterBarTopWrapper>
    );
  }
}

export default FilterBarTop;
