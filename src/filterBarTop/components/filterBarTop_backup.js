import React, { Component } from "react";
import FilterBarTopWrapper from "./filterBarTop.style";
import { Row, Col } from "antd";
import FilterSquare from "./filterSquare";
import MarketSelector from "./components/marketSelector";
import Filters from "./components/filters";

class FilterBarTop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActivated: true,
      activeMarket: {
        name: "Panama City Beach",
        key: "guid-pcb"
      },
      filters: {
        bedrooms: ["1", "3"],
        sleeps: ["2", "5"]
      },
      activeFilter: undefined
    };

    this.selectMarket = this.selectMarket.bind(this);
    this.updateFilters = this.updateFilters.bind(this);
  }

  updateFilters(name, value) {
    const { filters } = this.state;
    this.setState({ filters: Object.assign(filters, { [name]: value }) });
  }

  selectMarket(market) {
    this.setState({ activeMarket: market, activeFilter: undefined });
  }

  render() {
    const { activeMarket, filters, activeFilter } = this.state;
    console.dir(filters);
    return (
      <FilterBarTopWrapper>
        <Row>
          <Col span={4}>
            <FilterSquare
              isActivated={activeFilter === "market"}
              title="Market"
              poptitle="Choose a Market"
              currentSelections={activeMarket.name}
              placement="bottomLeft"
            >
              <MarketSelector
                activeMarket={activeMarket}
                selectMarket={this.selectMarket}
              />
            </FilterSquare>
          </Col>
          <Col span={4}>
            <FilterSquare
              title="Date Range"
              poptitle="Set Date Range"
              currentSelections="3/6/2018 - 3/21/2018"
              width="200"
            >
              <span>Date ranges...</span>
            </FilterSquare>
          </Col>
          <Col span={4}>
            <FilterSquare
              title="Compare To"
              poptitle="Set Comparison"
              currentSelections="3/2/2017 - 3/18/2017"
              width="210"
            >
              <span>Date pickers...</span>
            </FilterSquare>
          </Col>
          <Col span={4}>
            <FilterSquare
              title="Type"
              poptitle="Set Type"
              currentSelections="All"
              width="210"
            >
              <span>Type pickers...</span>
            </FilterSquare>
          </Col>
          <Col span={4}>
            <FilterSquare
              title="Areas"
              poptitle="Pick Areas"
              currentSelections="All"
              width="210"
            >
              <span>Area pickers...</span>
            </FilterSquare>
          </Col>
          <Col span={4}>
            <FilterSquare
              isActivated={activeFilter === "filters"}
              title="Filters"
              currentSelections="??"
              width="210"
              placement="bottomRight"
            >
              <Filters filters={filters} updateFilters={this.updateFilters} />
            </FilterSquare>

          </Col>
        </Row>
      </FilterBarTopWrapper>
    );
  }
}

export default FilterBarTop;
