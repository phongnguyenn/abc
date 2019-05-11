import React, { Component } from "react";
import FilterBarSquareWrapper from "./filterSquare.style";
import { Icon, Popover } from "antd";

class FilterSquare extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActivated: false
    };

    this.handleVisibleChange = this.handleVisibleChange.bind(this);
  }

  handleVisibleChange(visible) {
    const { onClose } = this.props;
    this.setState({ isActivated: visible });

    if (!visible) {
      onClose();
    }
  }

  render() {
    const {
      title,
      currentSelections,
      forceVisible = false
    } = this.props;
    
    const { isActivated = false } = this.state;

    return (      
      <Popover 
        trigger="hover"
        placement="bottom"
        content={this.props.children}
        onVisibleChange={this.handleVisibleChange}
      >
        <FilterBarSquareWrapper className={isActivated ? "activeBox" : ""}>
          <div className="title">{title}</div>
          <div className="current"><div className="summary">{currentSelections}</div></div>

          <div className="toggle">
            {isActivated && <Icon className="toggleIconActive" type="down" />}
            {!isActivated && <Icon className="toggleIcon" type="down" />}
          </div>
        </FilterBarSquareWrapper>

      </Popover>
    );
  }
}

export default FilterSquare;