import { OpaqueToken } from '@angular/core';
/**
 *
 */
export let APP_CONFIG = new OpaqueToken('app.config');

/**
 *
 */
export let app_config = {
  db: {
    dbname: 'small_shop'
  },

  'auth-service': {
    ignores: ['/setup']
  }
};
