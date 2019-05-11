import React, { Component } from "react";
import FilterBarSliderWrapper from "./filterBarSlider.style";
import { Icon } from 'antd';

class FilterBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActivated: true
    };

    this.toggleActiveStatus = this.toggleActiveStatus.bind(this);
  }

  toggleActiveStatus() {
    const { isActivated } = this.state;

    this.setState({ isActivated: isActivated ? false : true });
  }

  render() {
    const { isActivated } = this.state;

    console.log(isActivated);

    return (
      <FilterBarSliderWrapper
        className={isActivated ? "isoFilterBarSlider active" : "isoFilterBarSlider"}
      >
        {this.props.children}
        <button
          type="primary"
          className="switcherToggleBtn"
          onClick={this.toggleActiveStatus}
        >
          {/* <img src={process.env.PUBLIC_URL + bucketSVG} alt="bucket" /> */}

          <Icon
            type={isActivated ? "double-left" : "double-right"}
            />

        </button>
      </FilterBarSliderWrapper>
    );
  }
}

export default FilterBar;
