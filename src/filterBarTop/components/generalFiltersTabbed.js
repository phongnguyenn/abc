import React, { Component } from "react";
import FiltersTabbedWrapper from "./generalFiltersTabbed.style";
import { Select, Button, Col, Row, Tabs, Switch, Card } from "antd";
import { amenityOptions } from "../amenityOptions";
const Option = Select.Option;
const TabPane = Tabs.TabPane;

const bedroomOptions = [
  {
    name: "1",
    value: "1"
  },
  {
    name: "2",
    value: "2"
  },
  {
    name: "3",
    value: "3"
  },
  {
    name: "4",
    value: "4"
  },
  {
    name: "5",
    value: "5"
  }
];

const sleepOptions = [
  {
    name: "1",
    value: "1"
  },
  {
    name: "2",
    value: "2"
  },
  {
    name: "3",
    value: "3"
  },
  {
    name: "4",
    value: "4"
  },
  {
    name: "5",
    value: "5"
  }
];

const propertyLocations = [
  {
    name: "Near Beach",
    value: "NearBeach"
  },
  {
    name: "Waterfront",
    value: "Waterfront"
  }
];

const propertyTypeOptions = [
  {
    name: "House",
    value: "House"
  },
  {
    name: "Condo",
    value: "Condo"
  }
];

const areaOptions = [
  {
    name: "Blue Mountain Beach",
    value: "Blue Mountain Beach"
  }
];

class GeneralFiltersTabbed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: props.filters
    };

    this.handleSelectListChange = this.handleSelectListChange.bind(this);
  }

  handleSelectListChange(name, value) {
    this.returnChanges(name, value);
  }

  returnChanges(name, value) {
    const { onFilterChanges } = this.props;
    const { filters } = this.state;

    const newFilters = Object.assign(filters, { [name]: value });
    this.setState({ filters: newFilters });

    onFilterChanges(newFilters);
  }

  handleMultipleSelectFocus(element) {
    var thisField = document.getElementById(element);

    if (thisField) {
      thisField.setAttribute("readOnly", "readOnly");
    }
  }

  render() {
    const { filters } = this.state;
    const {
      bedrooms,
      sleeps,
      locations,
      propertyStructure,
      amenities,
      areas
    } = filters;

    return (
      <FiltersTabbedWrapper>
        <Tabs animated={false}>
          <TabPane tab="Bedrooms" key="bedroom">
            <Card
              title="Select Bedrooms"
              extra={
                <div>
                  <Switch
                    checkedChildren="Select All"
                    unCheckedChildren="Select None"
                  />
                </div>
              }
            >
              {bedroomOptions &&
                bedroomOptions.map((bedroomOption, index) => (
                  <div className="tabSwitch" key={index}>
                    <Switch checked={bedrooms.includes(bedroomOption.value)} />{" "}
                    <span>{bedroomOption.name}</span>
                  </div>
                ))}
            </Card>
          </TabPane>
          <TabPane tab="Sleeps" key="sleeps">
            <Card
              title="Select Sleeps"
              extra={
                <div>
                  <Switch
                    checkedChildren="Select All"
                    unCheckedChildren="Select None"
                  />
                </div>
              }
            >
              {sleepOptions &&
                sleepOptions.map((sleepOption, index) => (
                  <div className="tabSwitch" key={index}>
                    <Switch checked={sleeps.includes(sleepOption.value)} />{" "}
                    <span>{sleepOption.name}</span>
                  </div>
                ))}
            </Card>
          </TabPane>
          <TabPane tab="Locations" key="locations">
            <Card
              title="Select Locations"
              extra={
                <div>
                  <Switch
                    checkedChildren="Select All"
                    unCheckedChildren="Select None"
                  />
                </div>
              }
            >
              {propertyLocations &&
                propertyLocations.map((propertyLocation, index) => (
                  <div className="tabSwitch" key={index}>
                    <Switch
                      checked={locations.includes(propertyLocation.value)}
                    />{" "}
                    <span>{propertyLocation.name}</span>
                  </div>
                ))}
            </Card>
          </TabPane>
          <TabPane tab="Property Types" key="property-types">
            <Card
              title="Select Property Types"
              extra={
                <div>
                  <Switch
                    checkedChildren="Select All"
                    unCheckedChildren="Select None"
                  />
                </div>
              }
            >
              {propertyTypeOptions &&
                propertyTypeOptions.map((propertyTypeOption, index) => (
                  <div className="tabSwitch" key={index}>
                    <Switch
                      checked={propertyStructure.includes(
                        propertyTypeOption.value
                      )}
                    />{" "}
                    <span>{propertyTypeOption.name}</span>
                  </div>
                ))}
            </Card>
          </TabPane>
          <TabPane tab="Amenities" key="amenities">
            <Card
              title="Select Amenities"
              extra={
                <div>
                  <Switch
                    checkedChildren="Select All"
                    unCheckedChildren="Select None"
                  />
                </div>
              }
            >
              {amenityOptions &&
                amenityOptions.map((amenityOption, index) => (
                  <div className="tabSwitch" key={index}>
                    <Switch checked={amenities.includes(amenityOption.value)} />{" "}
                    <span>{amenityOption.name}</span>
                  </div>
                ))}{" "}
            </Card>
          </TabPane>
          <TabPane tab="Areas" key="areas">
            <Card
              title="Select Areas"
              extra={
                <div>
                  <Switch
                    checkedChildren="Select All"
                    unCheckedChildren="Select None"
                  />
                </div>
              }
            >
              {areaOptions &&
                areaOptions.map((areaOption, index) => (
                  <div className="tabSwitch" key={index}>
                    <Switch checked={areas.includes(areaOption.value)} />{" "}
                    <span>{areaOption.name}</span>
                  </div>
                ))}{" "}
            </Card>
          </TabPane>
        </Tabs>
      </FiltersTabbedWrapper>
    );
  }
}

export default GeneralFiltersTabbed;
