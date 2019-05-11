
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { FilterTagCloudInner, FilterTagCloudOuter } from './filterTagCloud.style';
import { Tag } from 'antd';

export default class FilterTagCloud extends Component {
  constructor(props) {
    super(props);

    this.handleTagRemoval = this.handleTagRemoval.bind(this);

    this.state = {
      activeTagGroups: [
        {
          "key": "property-bedrooms",
          "name": "Bedrooms",
          "tags": ["3", "4", "5"]
        },
        {
          "key": "property-sleeps",
          "name": "Sleeps",
          "tags": ["3", "8"]
        },
        {
          "key": "property-location",
          "name": "Property Location",
          "tags": ["Waterfront", "Lakefront"]
        },
        {
          "key": "property-type",
          "name": "Property Type",
          "tags": [
            "House", "Condo"]
        }
      ]
    };
  }

  handleTagRemoval(tagGroup, tag) {

    const { activeTagGroups } = this.state;

    var newActiveTagGroups = [];

    /* This is not an ideal way to handle this..just making it work for demo */
    activeTagGroups.forEach(function (activeTagGroup) {

      var newtagGroup = {
        key: activeTagGroup.key,
        name: activeTagGroup.name
      };

      if (tagGroup.key !== activeTagGroup.key) {

        newtagGroup.tags = activeTagGroup.tags;
        newActiveTagGroups.push(newtagGroup);

      } else {

        var newTagsForGroup = [];

        activeTagGroup.tags.forEach(function (activeTag) {
          if (activeTag !== tag) {
            newTagsForGroup.push(activeTag);
          }
        });

        if (newTagsForGroup.length !== 0) {
          newtagGroup.tags = newTagsForGroup;
          newActiveTagGroups.push(newtagGroup);
        }
      }
    });

    this.setState({ activeTagGroups: newActiveTagGroups });
  }


  render() {

    const { activeTagGroups } = this.state;

    return (
      <FilterTagCloudOuter>
        <FilterTagCloudInner>
          {activeTagGroups &&
            <div>
              {activeTagGroups.filter(t => t.tags.length !== -1).map((tagGroup, index) =>

                <div className="filterTypeGroup" data-key={tagGroup.key} >

                  <span className="groupName">{tagGroup.name}</span>
                  {tagGroup.tags.map((tag, index) =>

                    <Tag key={tagGroup.key + '-' + tag} color="#108ee9" closable
                      onClose={() => this.handleTagRemoval(tagGroup, tag)}>{tag}</Tag>

                  )}
                </div>

              )}
            </div>
          }
          {activeTagGroups.length === 0 &&
            <span><em>No Active Filters</em></span>
          }

        </FilterTagCloudInner>
      </FilterTagCloudOuter>
    );
  }
};