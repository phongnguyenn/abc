import React, { Component } from "react";
import * as dp from "./datePickerTypes";
import moment from "moment";
import { MarketSummaryWrapper, DateRangeSummaryWrapper, KpiSummaryWrapper, GeneralFiltersSummaryWrapper } from "./summary.style";
import { amenityOptions } from './amenityOptions';
const dateFormat = "YYYY/MM/DD";

const getMarketSummary = market => {
  return <MarketSummaryWrapper>{market.name}</MarketSummaryWrapper>;
};

const getDateRangeSummary = (dateRange, seasons) => {
  const { pickerType, start, end, seasonId } = dateRange;

  if (pickerType === dp.DATEPICKERTYPES_NONE) {
    return (
      <DateRangeSummaryWrapper>
        <span>Not Set</span>
      </DateRangeSummaryWrapper>
    );
  }
  else if (pickerType === dp.DATEPICKERTYPES_SEASON) {
    var selectedSeason = seasons.find(s => s.guid === seasonId);

    if (selectedSeason) {
      return (
        <DateRangeSummaryWrapper>
          <span className="season">{selectedSeason.seasonName}</span>
          <br />
          <span className="seasonDates">
            <span className="date">({selectedSeason.start.format("M-DD-YYYY")}</span> to{" "}
            <span className="date">{selectedSeason.end.format("M-DD-YYYY")})</span>
          </span>
        </DateRangeSummaryWrapper>
      );
    }
  } else if (pickerType === dp.DATEPICKERTYPES_CUSTOM) {
    return (
      <DateRangeSummaryWrapper>

      {(start === undefined || end === undefined) && 
          <span className="dates">
            Pending
          </span>
      }

      {(start !== undefined && end !== undefined) &&
        <span className="dates">
          <span className="date">{moment(start).format("M-DD-YYYY")}</span> to <span className="date">{moment(end).format("M-DD-YYYY")}</span>
        </span>
      }
        
      </DateRangeSummaryWrapper>
    );
  }
};

const getKpiSummary = (activeKpi, kpis) => {
  var selectedKpi = kpis.find(k => k.value === activeKpi);

  if (selectedKpi) {
    return (
      <KpiSummaryWrapper>
        <span className="kpi">{selectedKpi.name}</span>
      </KpiSummaryWrapper>
    );
  }
}

const getGeneralFiltersSummary = generalFilters => {
  const {
    bedrooms,
    sleeps,
    locations,
    propertyStructure,
    amenities,
    areas
  } = generalFilters;

  var filtersForSummary = [];

  if (bedrooms && bedrooms.length !== 0) {
    filtersForSummary.push({
      title: "Beds",
      value: `${bedrooms.join(", ")}`
    });
  }

  if (sleeps && sleeps.length !== 0) {
    filtersForSummary.push({
      title: "Sleeps",
      value: `${sleeps.join(", ")}`
    });
  }

  if (locations && locations.length !== 0) {
    filtersForSummary.push({
      title: "Location(s)",
      value: `${locations.join(", ")}`
    });
  }

  if (propertyStructure && propertyStructure.length !== 0) {
    filtersForSummary.push({
      title: "Property Type(s)",
      value: `${propertyStructure.join(", ")}`
    });
  }

  if (amenities && amenities.length !== 0) {

    var amentitiesForDisplay = [];
    amenities.forEach(function (amenity) {
      var amenitySelected = amenityOptions.find(a => a.value === amenity);

      if (amenitySelected) {
        amentitiesForDisplay.push(amenitySelected.name);
      }

    });

    if (amentitiesForDisplay.length !== 0)
    {
      filtersForSummary.push({
        title: "Amenities",
        value: `${amentitiesForDisplay.join(", ")}`
      });
    }
  }

  if (areas && areas.length !== 0) {
    filtersForSummary.push({
      title: "Areas",
      value: `${areas.join(", ")}`
    });
  }

  const totalFiltersSet = filtersForSummary.length;

  if (totalFiltersSet === 0) {
    return "Nothing Set";
  } else {
    return (
      <GeneralFiltersSummaryWrapper>
        {filtersForSummary &&
          filtersForSummary.map((summary, index) => (
            <span key={index}>
            <span className="amenityTitle">({summary.title}</span>:&nbsp;
              <span className="amenityValue">
                {summary.value}
              </span>)&nbsp;
              {index === 3 && <br />}
            </span>
          ))}
      </GeneralFiltersSummaryWrapper>
    );
  }
};

export { getMarketSummary, getDateRangeSummary, getKpiSummary, getGeneralFiltersSummary };
