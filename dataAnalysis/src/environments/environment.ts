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
