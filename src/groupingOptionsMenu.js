import React from "react";
import { Menu, Icon } from "antd";

const groupingOptions = [
  {
    name: "Bedrooms",
    value: "Bedrooms"
  },
  {
    name: "Area",
    value: "Area"
  },
  {
    name: "Sleeps",
    value: "Sleeps"
  },
  {
    name: "Structure",
    value: "Structure"
  },
  {
    name: "Location",
    value: "Location"
  }
];

const prepareGroupingsMenu = (currentGrouping, onTableGroupingTypeChage) => {

  return (
    <Menu onClick={onTableGroupingTypeChage}>
      {groupingOptions &&
        groupingOptions.map((groupingOption, index) => (
          <Menu.Item key={groupingOption.value}>
            <span>{groupingOption.name}</span>
            {groupingOption.value === currentGrouping && (
              <span>
                &nbsp;<Icon type="check" />
              </span>
            )}
          </Menu.Item>
        ))}
    </Menu>
  );
};

export { prepareGroupingsMenu };
