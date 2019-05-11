import React, { Component } from "react";
import MarketSelectorWrapper from "./marketSelector.style";
import MarketWrapper from "./market.style";
// import { Icon, Popover, Tag } from "antd";

const markets = [
  {
    name: "Walton",
    key: "guid-Walton"
  },
  {
    name: "30A",
    key: "guid-30a"
  },
  {
    name: "Destin",
    key: "guid-destin"
  },
  {
    name: "Fort Walton",
    key: "guid-fortwalton"
  },
  {
    name: "Panama City Beach",
    key: "guid-pcb"
  }
];

class MarketSelector extends Component {
  render() {
    const { onMarketSelectionChange, activeMarket } = this.props;

    return (
      <MarketSelectorWrapper>
        <h3>Choose a Market</h3>
        {markets &&
          markets.map(market => (
            <MarketWrapper
              key={market.key}
              className={activeMarket.key === market.key ? "active" : ""}
              onClick={() => onMarketSelectionChange(market)}
            >
              {market.name}
            </MarketWrapper>
          ))}
      </MarketSelectorWrapper>
    );
  }
}

export default MarketSelector;
