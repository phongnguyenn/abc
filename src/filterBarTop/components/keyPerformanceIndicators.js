import React, { Component } from "react";
import {
  KeyPerformanceIndicatorsWrapper,
  KpiWrapper
} from "./keyPerformanceIndicators.style";

class KeyPerformanceIndicators extends Component {
  static defaultProps = {
    allowMultiSelect: false
  };
  // constructor(props) {

  // }

  render() {
    const { onKpiSelectionChange, kpis, activeKpi } = this.props;
   
    return (
      <KeyPerformanceIndicatorsWrapper>
        <h3>Choose a KPI</h3>
        {kpis &&
          kpis.map(kpi => (
            <KpiWrapper
              key={kpi.value}
              className={kpi.value === activeKpi ? "active" : ""}
              onClick={() => onKpiSelectionChange(kpi.value)}
            >
              {kpi.name}
            </KpiWrapper>
          ))}
      </KeyPerformanceIndicatorsWrapper>
    );
  }
}

export default KeyPerformanceIndicators;
