interface nearCountry {
  "country_name": string;
  "country_code": string;
}

interface currentCountry {
  [key: string]: Array<nearCountry>;
}


export const nearCountries: Array<currentCountry> = [
  {
    "UA": [
      {
        "country_name": "Russia",
        "country_code": "RU"
      },
      {
        "country_name": "Belarus",
        "country_code": "BY"
      },
      {
        "country_name": "Poland",
        "country_code": "PL"
      },
      {
        "country_name": "Slovakia",
        "country_code": "SK"
      },
      {
        "country_name": "Hungary",
        "country_code": "HU"
      },
      {
        "country_name": "Romania",
        "country_code": "RO"
      },
      {
        "country_name": "Moldova",
        "country_code": "MD"
      },
    ],
  },
  {
    "MD": [
      {
        "country_name": "Ukraine",
        "country_code": "UA"
      },
      {
        "country_name": "Romania",
        "country_code": "RO"
      },
    ],
  },
  {
    "RO": [
      {
        "country_name": "Ukraine",
        "country_code": "UA"
      },
      {
        "country_name": "Moldova",
        "country_code": "MD"
      },
      {
        "country_name": "Serbia",
        "country_code": "SR"
      },
      {
        "country_name": "Bulgaria",
        "country_code": "BG"
      },
      {
        "country_name": "Hungary",
        "country_code": "HU"
      }
    ],
  },
  {
    "PL": [
      {
        "country_name": "Ukraine",
        "country_code": "UA"
      },
      {
        "country_name": "Slovakia",
        "country_code": "SK"
      },
      {
        "country_name": "Czech Republic",
        "country_code": "CZ"
      },
      {
        "country_name": "Germany",
        "country_code": "DE"
      },
      {
        "country_name": "Lithuania",
        "country_code": "LT"
      },
      {
        "country_name": "Russia",
        "country_code": "RU"
      }
    ]
  }
]