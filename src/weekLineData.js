import { prepareLineChartData } from './lineChartDataConverters';
import { prepareBarChartData } from './barChartDataConverters';
import { rawDataFromAPI } from './rawDataFromAPIExample';

var pmColor = '#2F5EC4';
var pmColorOpacity = '#2F5EC4';
var marketColor = '#45A5F5';
var regionColor = '#54B4CF';


function convertHex(hex, opacity) {
  hex = hex.replace('#', '');
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
  return result;
}

pmColorOpacity = convertHex(pmColor, 10)

const weekLineDataProcessedFormat = prepareLineChartData(rawDataFromAPI);
const weekBarDataProcessedFormat = prepareBarChartData(rawDataFromAPI);

export { weekLineDataProcessedFormat, weekBarDataProcessedFormat };

// const weekLineData = [
//   {
//     name: "PM",
//     data: [
//       [
//         "3/10/18",
//         60
//       ],
//       [
//         "3/17/18",
//         45
//       ],
//       [
//         "3/24/18",
//         48
//       ],
//       [
//         "3/31/18",
//         38
//       ],
//       [
//         "4/07/18",
//         45
//       ],
//       [
//         "4/14/18",
//         65
//       ],
//       [
//         "4/21/18",
//         68
//       ],
//       [
//         "4/28/18",
//         64
//       ],
//       [
//         "5/05/18",
//         47
//       ],
//       [
//         "5/12/18",
//         45
//       ],
//       [
//         "5/19/18",
//         40
//       ],
//       [
//         "5/26/18",
//         33
//       ]
//     ],
//     library: {
//       backgroundColor: pmColorOpacity,
//       borderColor: pmColor,
//       pointStyle: 'rectRot',
//       borderWidth: 2,
//       fill: 'origin'
//     }
//   },
//   {
//     name: "PM (Compared)",
//     data: [
//       [
//         "3/10/18",
//         57
//       ],
//       [
//         "3/17/18",
//         42
//       ],
//       [
//         "3/24/18",
//         45
//       ],
//       [
//         "3/31/18",
//         30
//       ],
//       [
//         "4/07/18",
//         42
//       ],
//       [
//         "4/14/18",
//         61
//       ],
//       [
//         "4/21/18",
//         64
//       ],
//       [
//         "4/28/18",
//         62
//       ],
//       [
//         "5/05/18",
//         47
//       ],
//       [
//         "5/12/18",
//         41
//       ],
//       [
//         "5/19/18",
//         35
//       ],
//       [
//         "5/26/18",
//         28
//       ]
//     ],
//     library: {
//       backgroundColor: 'white',
//       borderColor: pmColor,
//       pointStyle: 'rectRot',
//       borderWidth: 2,
//       borderDash: [
//         5,
//         5
//       ]
//     }
//   },
//   {
//     name: "Market",
//     data: [
//       [
//         "3/10/18",
//         69
//       ],
//       [
//         "3/17/18",
//         47
//       ],
//       [
//         "3/24/18",
//         49
//       ],
//       [
//         "3/31/18",
//         33
//       ],
//       [
//         "4/07/18",
//         49
//       ],
//       [
//         "4/14/18",
//         75
//       ],
//       [
//         "4/21/18",
//         74
//       ],
//       [
//         "4/28/18",
//         71
//       ],
//       [
//         "5/05/18",
//         55
//       ],
//       [
//         "5/12/18",
//         53
//       ],
//       [
//         "5/19/18",
//         39
//       ],
//       [
//         "5/26/18",
//         29
//       ]
//     ],
//     library: {
//       backgroundColor: 'white',
//       borderColor: marketColor,
//       pointStyle: 'rectRot',
//       borderWidth: 2
//     }
//   },
//   {
//     name: "Market (Compared)",
//     data: [
//       [
//         "3/10/18",
//         67
//       ],
//       [
//         "3/17/18",
//         44
//       ],
//       [
//         "3/24/18",
//         48
//       ],
//       [
//         "3/31/18",
//         31
//       ],
//       [
//         "4/07/18",
//         47
//       ],
//       [
//         "4/14/18",
//         73
//       ],
//       [
//         "4/21/18",
//         71
//       ],
//       [
//         "4/28/18",
//         70
//       ],
//       [
//         "5/05/18",
//         59
//       ],
//       [
//         "5/12/18",
//         56
//       ],
//       [
//         "5/19/18",
//         42
//       ],
//       [
//         "5/26/18",
//         30
//       ]
//     ],
//     library: {
//       lineTension: 0,
//       backgroundColor: 'white',
//       borderColor: marketColor,
//       pointStyle: 'rectRot',
//       borderWidth: 1,
//       borderDash: [
//         5,
//         5
//       ]
//     }
//   },
//   {
//     name: "Region",
//     data: [
//       [
//         "3/10/18",
//         43
//       ],
//       [
//         "3/17/18",
//         33
//       ],
//       [
//         "3/24/18",
//         41
//       ],
//       [
//         "3/31/18",
//         30
//       ],
//       [
//         "4/07/18",
//         39
//       ],
//       [
//         "4/14/18",
//         47
//       ],
//       [
//         "4/21/18",
//         60
//       ],
//       [
//         "4/28/18",
//         57
//       ],
//       [
//         "5/05/18",
//         40
//       ],
//       [
//         "5/12/18",
//         38
//       ],
//       [
//         "5/19/18",
//         35
//       ],
//       [
//         "5/26/18",
//         25
//       ]
//     ],
//     library: {
//       backgroundColor: 'white',
//       borderColor: regionColor,
//       pointStyle: 'rectRot',
//       borderWidth: 2
//     }
//   },
//   {
//     name: "Region (Compared)",
//     data: [
//       [
//         "3/10/18",
//         40
//       ],
//       [
//         "3/17/18",
//         28
//       ],
//       [
//         "3/24/18",
//         43
//       ],
//       [
//         "3/31/18",
//         33
//       ],
//       [
//         "4/07/18",
//         35
//       ],
//       [
//         "4/14/18",
//         42
//       ],
//       [
//         "4/21/18",
//         61
//       ],
//       [
//         "4/28/18",
//         53
//       ],
//       [
//         "5/05/18",
//         41
//       ],
//       [
//         "5/12/18",
//         31
//       ],
//       [
//         "5/19/18",
//         30
//       ],
//       [
//         "5/26/18",
//         22
//       ]
//     ],
//     library: {
//       backgroundColor: 'white',
//       borderColor: regionColor,
//       pointStyle: 'rectRot',
//       borderWidth: 2,
//       borderDash: [
//         5,
//         5
//       ]
//     }
//   }
// ];

// const weekLineDataBar = [
//   {
//     name: "PM",
//     data: [
//       [
//         "3/10/18",
//         60
//       ],
//       [
//         "3/17/18",
//         45
//       ],
//       [
//         "3/24/18",
//         48
//       ],
//       [
//         "3/31/18",
//         38
//       ],
//       [
//         "4/07/18",
//         45
//       ],
//       [
//         "4/14/18",
//         65
//       ],
//       [
//         "4/21/18",
//         68
//       ],
//       [
//         "4/28/18",
//         64
//       ],
//       [
//         "5/05/18",
//         47
//       ],
//       [
//         "5/12/18",
//         45
//       ],
//       [
//         "5/19/18",
//         40
//       ],
//       [
//         "5/26/18",
//         33
//       ]
//     ],
//     library: {
//       lineTension: 0,
//       backgroundColor: pmColor,
//       borderColor: pmColor,
//       pointStyle: 'rectRot',
//       borderWidth: 5
//     }
//   },
//   {
//     name: "Market",
//     data: [
//       [
//         "3/10/18",
//         69
//       ],
//       [
//         "3/17/18",
//         47
//       ],
//       [
//         "3/24/18",
//         49
//       ],
//       [
//         "3/31/18",
//         33
//       ],
//       [
//         "4/07/18",
//         49
//       ],
//       [
//         "4/14/18",
//         75
//       ],
//       [
//         "4/21/18",
//         74
//       ],
//       [
//         "4/28/18",
//         71
//       ],
//       [
//         "5/05/18",
//         55
//       ],
//       [
//         "5/12/18",
//         53
//       ],
//       [
//         "5/19/18",
//         39
//       ],
//       [
//         "5/26/18",
//         29
//       ]
//     ],
//     library: {
//       lineTension: 0,
//       backgroundColor: marketColor,
//       borderColor: marketColor,
//       pointStyle: 'rectRot',
//       borderWidth: 5
//     }
//   },
//   {
//     name: "Region",
//     data: [
//       [
//         "3/10/18",
//         43
//       ],
//       [
//         "3/17/18",
//         33
//       ],
//       [
//         "3/24/18",
//         41
//       ],
//       [
//         "3/31/18",
//         30
//       ],
//       [
//         "4/07/18",
//         39
//       ],
//       [
//         "4/14/18",
//         47
//       ],
//       [
//         "4/21/18",
//         60
//       ],
//       [
//         "4/28/18",
//         57
//       ],
//       [
//         "5/05/18",
//         40
//       ],
//       [
//         "5/12/18",
//         38
//       ],
//       [
//         "5/19/18",
//         35
//       ],
//       [
//         "5/26/18",
//         25
//       ]
//     ],
//     library: {
//       lineTension: 0,
//       backgroundColor: regionColor,
//       borderColor: regionColor,
//       pointStyle: 'rectRot',
//       borderWidth: 5
//     }
//   },

// ];