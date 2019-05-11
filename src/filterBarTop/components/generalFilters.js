import React, { Component } from "react";
import FiltersWrapper from "./generalFilters.style";
import { Select, Button, Col, Row } from "antd";
import { amenityOptions } from "../amenityOptions";
const Option = Select.Option;

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

class GeneralFilters extends Component {
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
    // var thisField = document.getElementById(element);
    // if (thisField) {
    //   thisField.setAttribute('readOnly', 'readOnly');
    // }
  }

  componentDidMount() {
    var selectFields = document.getElementsByClassName(
      "ant-select-search__field"
    );

    for (var i = 0; i < selectFields.length; i++) {
      selectFields[i].setAttribute("readOnly", "readOnly");
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
      <FiltersWrapper>
        <Row gutter={16}>
          <Col span={12}>
            {" "}
            <h3>Bedrooms</h3>
            <Select
              showSearch={false}
              id="bedrooms"
              onFocus={() => this.handleMultipleSelectFocus("bedrooms")}
              mode="multiple"
              style={{ width: "100%", marginBottom: "10px", marginTop: "5px" }}
              placeholder="Please select"
              defaultValue={bedrooms}
              onChange={value => this.handleSelectListChange("bedrooms", value)}
            >
              {bedroomOptions &&
                bedroomOptions.map((bedroomOption, index) => (
                  <Option key={bedroomOption.value}>
                    {bedroomOption.name}
                  </Option>
                ))}
            </Select>
          </Col>
          <Col span={12}>
            <h3>Property Type</h3>
            <Select
              showSearch={false}
              id="propertytypes"
              onFocus={() => this.handleMultipleSelectFocus("propertytypes")}
              mode="multiple"
              style={{ width: "100%", marginBottom: "10px", marginTop: "5px" }}
              placeholder="Please select"
              defaultValue={propertyStructure}
              onChange={value =>
                this.handleSelectListChange("propertyStructure", value)
              }
            >
              {propertyTypeOptions &&
                propertyTypeOptions.map((propertyTypeOption, index) => (
                  <Option key={propertyTypeOption.value}>
                    {propertyTypeOption.name}
                  </Option>
                ))}
            </Select>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <h3>Sleeps</h3>
            <Select
              showSearch={false}
              id="sleeps"
              onFocus={() => this.handleMultipleSelectFocus("sleeps")}
              mode="multiple"
              style={{ width: "100%", marginBottom: "10px", marginTop: "5px" }}
              placeholder="Please select"
              defaultValue={sleeps}
              onChange={value => this.handleSelectListChange("sleeps", value)}
            >
              {sleepOptions &&
                sleepOptions.map((sleepOption, index) => (
                  <Option key={sleepOption.value}>{sleepOption.name}</Option>
                ))}
            </Select>
          </Col>
          <Col span={12}>
            {" "}
            <h3>Areas</h3>
            <Select
              showSearch={false}
              id="areas"
              onFocus={() => this.handleMultipleSelectFocus("areas")}
              mode="multiple"
              style={{ width: "100%", marginBottom: "10px", marginTop: "5px" }}
              placeholder="Please select"
              defaultValue={areas}
              onChange={value => this.handleSelectListChange("areas", value)}
            >
              {areaOptions &&
                areaOptions.map((areaOption, index) => (
                  <Option key={areaOption.value}>{areaOption.name}</Option>
                ))}
            </Select>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            {" "}
            <h3>Property Location</h3>
            <Select
              showSearch={false}
              id="locations"
              onFocus={() => this.handleMultipleSelectFocus("locations")}
              mode="multiple"
              style={{ width: "100%", marginBottom: "10px", marginTop: "5px" }}
              placeholder="Please select"
              defaultValue={locations}
              onChange={value =>
                this.handleSelectListChange("locations", value)
              }
            >
              {propertyLocations &&
                propertyLocations.map((locationOption, index) => (
                  <Option key={locationOption.value}>
                    {locationOption.name}
                  </Option>
                ))}
            </Select>
          </Col>
          <Col span={12}>
            <h3>Amenities</h3>
            <Select
              showSearch={false}
              id="amenities"
              onFocus={() => this.handleMultipleSelectFocus("amenities")}
              mode="multiple"
              style={{ width: "100%", marginBottom: "10px", marginTop: "5px" }}
              placeholder="Please select"
              defaultValue={amenities}
              onChange={value =>
                this.handleSelectListChange("amenities", value)
              }
            >
              {amenityOptions &&
                amenityOptions.map((amenityOption, index) => (
                  <Option key={amenityOption.value}>
                    {amenityOption.name}
                  </Option>
                ))}
            </Select>
          </Col>
        </Row>
      </FiltersWrapper>
    );
  }
}

export default GeneralFilters;
