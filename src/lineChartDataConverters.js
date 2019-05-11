import { pmColorBackground, pmColor, marketColor, regionColor, colorDictionary } from './chartColors';
import merge from 'lodash.merge';

const primaryLevel = "manager";

const prepareLineChartData = (dataSource) => {

  var processedData = {
    "labels": dataSource.labels,
    "datasets": []
  };

  dataSource.datasets.forEach(function (dataSetRaw) {

    var dataSet = merge(Object.assign({}, getDataSetCommonDefaults()), {
      "label": dataSetRaw.name,
      "data": dataSetRaw.data,
      "level": dataSetRaw.type,
      "isComparisonData": dataSetRaw.isComparisonData,
      "borderColor": colorDictionary[dataSetRaw.type]
    });

    var getAppropriateDefaults = dataSetRaw.isManager ? getDataSetManagerDefaults() : getDataSetComparisonDefaults();

    if (dataSetRaw.isComparisonData) {
      merge(dataSet, getBorderDashDefaults());
    }

    merge(dataSet, getAppropriateDefaults);
    processedData.datasets.push(dataSet);

  });

  return processedData;
}

const getDataSetCommonDefaults = () => {
  return {
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 3
  };
}

const getDataSetManagerDefaults = () => {
  return {
    fill: true,
    backgroundColor: pmColorBackground,
    pointHitRadius: 10,
    datalabels: {
      align: 'end',
      anchor: 'end'
    }
  };
}

const getBorderDashDefaults = () => {
  return {
    borderDash: [
      5,
      5
    ]
  };
}

const getDataSetComparisonDefaults = () => {
  return {
    fill: false,
    backgroundColor: 'white',
    pointRadius: 3
  };
}

export { prepareLineChartData };