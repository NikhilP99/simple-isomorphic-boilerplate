/* eslint-disable */

import path from 'path';
import _ from 'lodash';

// function requiredProcessEnv(name) {
//   if(!process.env[name]) {
//     throw new Error('You must set the ' + name + ' environment variable');
//   }
//   return process.env[name];
// }

// All configurations will extend these options
// ============================================
const all = {
  env: process.env.NODE_ENV,

  // Storage
  GCLOUD_STORAGE_BUCKET: process.env.GCLOUD_STORAGE_BUCKET || 'vega-demo-cdn',

  // // Root path of server
  // root: path.normalize(`${__dirname}/../../..`),

  // // Browser-sync port
  // browserSyncPort: process.env.BROWSER_SYNC_PORT || 9000,

  // APP_ENGINE
  app_enigne: process.env.APP_ENGINE || false,

  // Server port
  port: process.env.PORT || 3000,

  // API Gateway
  api: {
    // API URL to be used in the client-side code
    clientUrl: process.env.API_CLIENT_URL || '',
    // API URL to be used in the server-side code
    serverUrl:
      process.env.API_SERVER_URL ||
      `http://localhost:${process.env.PORT || 3000}`,
  },

  // Should we populate the DB with sample data?
  seedDB: false,

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'vega-secret',
  },

  // Web analytics
  analytics: {
    // https://analytics.google.com/
    googleTrackingId: process.env.GOOGLE_TRACKING_ID || 'UA-XXXXX-X', // UA-XXXXX-X
  },
};

// Export the config object based on the NODE_ENV
// ==============================================
export const config = _.merge(
  all,
  require(`./${process.env.NODE_ENV}.js`) || {},
);

export default { config };
