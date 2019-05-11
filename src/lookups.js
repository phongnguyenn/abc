const currentMarketGuid = "guid-Walton";

const rawLookups = {
  "markets": [
    {
      "name": "Walton",
      "value": "guid-Walton",
      "lookups": {
        "bedrooms": [
          {
            "name": "1",
            "value": "1"
          },
          {
            "name": "5",
            "value": "5"
          },
          {
            "name": "6",
            "value": "6"
          }
        ],
        "sleeps": [
          {
            "name": "1",
            "value": "1"
          },
          {
            "name": "3",
            "value": "3"
          },
          {
            "name": "8",
            "value": "8"
          }
        ],
        "propertyLocations": [
          {
            "name": "Near Beach",
            "value": "NearBeach"
          },
          {
            "name": "Waterfront",
            "value": "Waterfront"
          }
        ],
        "propertyTypes": [
          {
            "name": "House",
            "value": "House"
          },
          {
            "name": "Condo",
            "value": "Condo"
          }
        ],
        "amenities": [
          {
            "name": "Private Pool",
            "value": "PrivatePool"
          },
          {
            "name": "A/C",
            "value": "AirConditioning"
          },
          {
            "name": "Fireplace",
            "value": "Fireplace"
          },
          {
            "name": "Internet",
            "value": "Internet"
          }
        ],
        "areas": [
          {
            "name": "Blue Mountain Beach",
            "value": "Blue Mountain Beach"
          }
        ],
        "customUnitGroups": [
          {
            "name": "Houses w/ Bikes",
            "value": "guid"
          }
        ]
      }
    }
  ],
    "groupings": [
      {
        "name": "Bedrooms",
        "value": "Bedrooms"
      },
      {
        "name": "Area",
        "value": "Area"
      },
      {
        "name": "Sleeps",
        "value": "Sleeps"
      },
      {
        "name": "Structure",
        "value": "Structure"
      },
      {
        "name": "Location",
        "value": "Location"
      }
    ],
      "comparativeKpis": [
        {
          "name": "Occupancy Rate",
          "value": "occupancy-rate"
        },
        {
          "name": "Available Occupancy Rate",
          "value": "available-occupancy-rate"
        }
      ],
        "nonComparativeKpis": [
          {
            "name": "Total Reservations",
            "value": "total-reservations"
          }
        ],
          "allKpis": [
            {
              "name": "Occupancy Rate",
              "value": "occupancy-rate"
            },
            {
              "name": "Total Reservations",
              "value": "total-reservations"
            }
          ],
            "dateBreakdowns": [
              {
                "name": "Week",
                "value": "Week"
              },
              {
                "name": "Month",
                "value": "Month"
              },
              {
                "name": "Season",
                "value": "Season"
              }
            ]
}

var currentMarket = {};

rawLookups.markets.map((market, index) => {

  
  if (currentMarketGuid === market.value) {
    currentMarket = market;
  }

});

export { rawLookups, currentMarket };