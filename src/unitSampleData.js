import React from 'react';
import { Icon } from 'antd';
import { TABLECELL_RENDER_RISEFALLFLARE, prepareFunctionalData } from './tableHelpers';

const tableSampleColumnsRawFromAPIExample = [{
  title: 'Unit',
  dataIndex: 'unit',
  width: 400
}, {
  title: 'PM',
  dataIndex: 'pm',
}, {
  title: 'Compared',
  dataIndex: 'pmCompared',
  render: TABLECELL_RENDER_RISEFALLFLARE
}, {
  title: 'Market',
  dataIndex: 'market',
}, {
  title: 'Region',
  dataIndex: 'region',
}];

const tableSampleColumns = prepareFunctionalData(tableSampleColumnsRawFromAPIExample);


// const tableCellHightLights = [
//   {
//     dataIndex: 'pmCompared',
//     key: 1,
//     flare: 'falling'
//   },
//   {
//     dataIndex: 'pmCompared',
//     key: 2,
//     flare: 'rising'
//   },
//   {
//     dataIndex: 'regionCompared',
//     key: 2,
//     flare: 'rising'
//   }

// ];

// const getCellFlare = (text, key, dataIndex) => {
//   var cellFlare = tableCellHightLights.find(f => f.key === key && f.dataIndex === dataIndex);

//   if (cellFlare) {

//     var spanClassName = cellFlare.flare === 'rising' ? 'tableCellFlareRising' : 'tableCellFlareFalling';
//     var spanIcon = cellFlare.flare === 'rising' ? 'arrow-up' : 'arrow-down';

//     return <span className={spanClassName}>
//       {text} &nbsp;
//               <Icon type={spanIcon} />
//     </span>;

//   } else {
//     return <span>{text}</span>;
//   }
// };

const tableSampleRows = [{
  key: 1,
  unit: "VC 106",
  pm: "9.8%",
  pmCompared: "2.5",
  market: "9.8%",
  marketCompared: "2.5",
  region: "9.8%",
  regionCompared: "2.5",
  description: "Property 1, Property 3, Property 5",
  flares: [
    {
      dataIndex: "pmCompared",
      flare: 'falling'
    },
    {
      dataIndex: "regionCompared",
      flare: 'rising'
    }
  ]  
},
{
  key: 3,
  unit: "VC 107",
  pm: "9.8%",
  pmCompared: "2.5",
  market: "9.8%",
  marketCompared: "2.5",
  region: "9.8%",
  regionCompared: "2.5",
  description: "Property 1, Property 3, Property 5",
  flares: [
    {
      dataIndex: "marketCompared",
      flare: 'rising'
    },
    {
      dataIndex: "regionCompared",
      flare: 'falling'
    }
  ]  
  },
  {
    key: 4,
    unit: "VC 108",
    pm: "9.8%",
    pmCompared: "2.5",
    market: "9.8%",
    marketCompared: "2.5",
    region: "9.8%",
    regionCompared: "2.5",
    description: "Property 1, Property 3, Property 5",
    flares: [
      {
        dataIndex: "pmCompared",
        flare: 'falling'
      },
      {
        dataIndex: "regionCompared",
        flare: 'falling'
      }
    ]      
  },
  {
    key: 5,
    unit: "VC 200",
    pm: "9.8%",
    pmCompared: "2.5",
    market: "9.8%",
    marketCompared: "2.5",
    region: "9.8%",
    regionCompared: "2.5",
    description: "Property 1, Property 3, Property 5",
    flares: [
      {
        dataIndex: "pmCompared",
        flare: 'rising'
      },
      {
        dataIndex: "regionCompared",
        flare: 'falling'
      }
    ]
  }];

export { tableSampleColumns, tableSampleRows };