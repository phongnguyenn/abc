import React from 'react';
import { Icon } from 'antd';
import { TABLECELL_RENDER_RISEFALLFLARE, prepareFunctionalData } from './tableHelpers';

const tableSampleColumnsRawFromAPIExample = [{
    title: 'Grouping',
    dataIndex: 'unitType'
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
    title: 'Compared',
    dataIndex: 'marketCompared',
    render: TABLECELL_RENDER_RISEFALLFLARE
  }, {
    title: 'Region',
    dataIndex: 'region',
  }, {
    title: 'Compared',
    dataIndex: 'regionCompared',
    render: TABLECELL_RENDER_RISEFALLFLARE
  }];


const tableSampleColumns = prepareFunctionalData(tableSampleColumnsRawFromAPIExample);

const tableSampleRows = [{
    key: 1,
    unitType: "1 Bedroom",
    pm: "9.8%",
    pmCompared: "2.5",
    market: "9.8%",
    marketCompared: "2.5",
    region: "9.8%",
    regionCompared: "2.5",
    flares: [
      {
        dataIndex: "pmCompared", 
        flare: 'falling'
      },
      {
        dataIndex: "marketCompared",
        flare: 'rising'
      },
      {
        dataIndex: "regionCompared",
        flare: 'rising'
      }
      ]     
  },
  {
    key: 2,
    unitType: "2 Bedroom",
    pm: "9.8%",
    pmCompared: "2.5",
    market: "9.8%",
    marketCompared: "2.5",
    region: "9.8%",
    regionCompared: "2.5",
    flares: [
      {
        dataIndex: "pmCompared",
        flare: 'rising'
      },
      {
        dataIndex: "marketCompared",
        flare: 'falling'
      },
      {
        dataIndex: "regionCompared",
        flare: 'falling'
      }
    ] 
  },
  {
    key: 3,
    unitType: "5 Bedroom",
    pm: "9.8%",
    pmCompared: "2.5",
    market: "9.8%",
    marketCompared: "2.5",
    region: "9.8%",
    regionCompared: "2.5",
    flares: [
      {
        dataIndex: "pmCompared",
        flare: 'falling'
      },
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
    unitType: "6 Bedroom",
    pm: "9.8%",
    pmCompared: "2.5",
    market: "9.8%",
    marketCompared: "2.5",
    region: "9.8%",
    regionCompared: "2.5",
    flares: [
      {
        dataIndex: "pmCompared",
        flare: 'rising'
      },
      {
        dataIndex: "marketCompared",
        flare: 'rising'
      },
      {
        dataIndex: "regionCompared",
        flare: 'rising'
      }
    ]
  },
  {
    key: 5,
    unitType: "7 Bedroom",
    pm: "9.8%",
    pmCompared: "2.5",
    market: "9.8%",
    marketCompared: "2.5",
    region: "9.8%",
    regionCompared: "2.5",
    flares: [
      {
        dataIndex: "pmCompared",
        flare: 'falling'
      },
      {
        dataIndex: "marketCompared",
        flare: 'rising'
      },
      {
        dataIndex: "regionCompared",
        flare: 'rising'
      }
    ]
  },
  {
    key: 6,
    unitType: "8 Bedroom",
    pm: "9.8%",
    pmCompared: "2.5",
    market: "9.8%",
    marketCompared: "2.5",
    region: "9.8%",
    regionCompared: "2.5",
    flares: [
      {
        dataIndex: "pmCompared",
        flare: 'rising'
      },
      {
        dataIndex: "marketCompared",
        flare: 'falling'
      },
      {
        dataIndex: "regionCompared",
        flare: 'rising'
      }
    ]
  }
  ];

export { tableSampleColumns, tableSampleRows };