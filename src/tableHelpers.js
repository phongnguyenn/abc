import React from 'react';
import { Icon } from 'antd';
const TABLECELL_RENDER_RISEFALLFLARE = 'TABLECELL_RENDER_RISEFALLFLARE';

const riseFallFlare = (dataIndex, text, record) => {

  var returnText = text;

  if (record.hasOwnProperty('flares')) {
    var cellFlare = record.flares.find(f => f.dataIndex === dataIndex);

    if (cellFlare !== undefined) {
        var spanClassName = cellFlare.flare === 'rising' ? 'tableCellFlareRising' : 'tableCellFlareFalling';
        var spanIcon = cellFlare.flare === 'rising' ? 'arrow-up' : 'arrow-down';

        returnText = <span className={spanClassName}>
            {text} &nbsp;
            <Icon type={spanIcon} />
          </span>;
    }
  }

  return returnText;

}

const prepareFunctionalData = (tableColumns) => {
  //var cellFlare = tableCellHightLights.find(f => f.key === key && f.dataIndex === dataIndex);

  tableColumns.forEach(function(tableColumn) {    
    if (tableColumn.hasOwnProperty('render')) {

      switch (tableColumn.render)
      {
        case TABLECELL_RENDER_RISEFALLFLARE:
          tableColumn.render = (text, record) => {
            //var foo =
            return riseFallFlare(tableColumn.dataIndex, text, record);
          }
          break;
      }

    }
  });

  return tableColumns;
}

const getOddEvenTableRow = (index) => {

  if ((index % 2) === 1) {
    return "subTableEvenRow";
  }
  else {
    return "subTableOddRow";
  }
}

export { TABLECELL_RENDER_RISEFALLFLARE, prepareFunctionalData, getOddEvenTableRow }