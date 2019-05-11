const rawDataFromAPI = {
  "labels": ["3/10/18", "3/17/18", "3/24/18", "3/31/18", "4/07/18", "4/14/18", "4/21/18", "4/28/18", "5/05/18", "5/12/18", "5/19/18", "5/26/18"],
  "datasets": [
    {
      "isManager": true,
      "name": "PM",
      "type": "manager",
      "isComparisonData": false,
      "data": [60, 45, 48, 38, 45, 65, 68, 64, 47, 45, 40, 33]
    },
    {
      "isManager": false,
      "name": "PM (Compared)",
      "type": "manager",
      "isComparisonData": true,
      "data": [57, 42, 45, 30, 42, 61, 64, 62, 47, 41, 35, 28]
    },
    {
      "isManager": false,
      "name": "Market",
      "type": "market",
      "isComparisonData": false,
      "data": [69, 47, 49, 33, 49, 75, 74, 71, 55, 53, 39, 29]
    },
    {
      "isManager": false,
      "name": "Market (Compared)",
      "type": "market",
      "isComparisonData": true,
      "data": [67, 44, 48, 31, 47, 73, 71, 70, 59, 56, 42, 30]
    },
    {
      "isManager": false,
      "name": "Region",
      "type": "region",
      "isComparisonData": false,
      "data": [43, 33, 41, 30, 39, 47, 60, 57, 40, 38, 35, 25]
    },
    {
      "isManager": false,
      "name": "Region (Compared)",
      "type": "region",
      "isComparisonData": true,
      "data": [40, 28, 43, 33, 35, 42, 61, 53, 41, 31, 30, 22]
    }
  ]
};

export { rawDataFromAPI };