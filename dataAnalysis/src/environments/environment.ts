const env = {
  production: false,
  sourceId: 'AccountMasterWeb',
  applicationName: 'Account Master',
  apiEndpoint: 'http://165.227.107.6:5000',
  columnConfiguration: {
    endpoint: '/ColumnConfiguration'
  },
  games: {
    endpoint: '/games'
  },
  portfolio: {
    endpoint: '/Portfolio'
  },
  qPRInclusion: {
    endpoint: '/PortfolioQPRInclusion'
  },
  portfolioBenchmark: {
    endpoint: '/PortfolioBenchmark'
  },
  portfolioGroup: {
    endpoint: '/PortfolioGroup'
  },
  portfolioGroupType: {
    endpoint: '/PortfolioGroupType'
  },
  portfolioGroupMembership: {
    endpoint: '/PortfolioGroupMembership'
  },
  relationship: {
    endpoint: '/Relationship'
  },
  lookup: {
    endpoint: '/Lookup'
  },
  fielddata: {
    endpoint: '/FieldData'
  },
  fieldnote: {
    endpoint: '/FieldNote'
  },
  fundRegistrant: {
    endpoint: '/FundRegistrant'
  },
  fundRegulatory: {
    endpoint: '/FundRegulatory'
  },
  fundClass: {
    endpoint: '/FundClass'
  },
  portfolioManager: {
    endpoint: '/PortfolioManager'
  },
  employeeLookup: {
    endpoint: '/EmployeeLookup'
  },
  parent: {
    endpoint: '/Parent'
  },
  pmTeam: {
    endpoint: '/PmTeam'
  },
  pmTeamEmployee: {
    endpoint: '/PmTeamEmployee'
  },
  qprPm: {
    endpoint: '/QprPm'
  },
  lookupParentChild: {
    endpoint: '/LookupParentChild'
  }
};

export const environment = env;
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
