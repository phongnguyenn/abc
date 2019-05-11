var marketColor = '#1e7fbf';
var pmColorBackground = '#2F5EC4';
var pmColor= '#f7981e';
var regionColor = '#54B4CF';

function convertHex(hex, opacity) {
  hex = hex.replace('#', '');
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
  return result;
}

pmColorBackground = convertHex(pmColor, 10)

const colorDictionary = {
  manager: pmColor,
  market: marketColor,
  region: regionColor
};

const colorDictionaryAsHex = {
  manager: convertHex(pmColor, 10),
  market: convertHex(marketColor, 10),
  region: convertHex(regionColor, 10)
};


export { pmColor, pmColorBackground, marketColor, regionColor, colorDictionary, colorDictionaryAsHex };