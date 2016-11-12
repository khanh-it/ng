import { OpaqueToken } from '@angular/core';

/**
 *
 */
export interface AppConfigInterface {
  db: Object
}
/**
 *
 */
export let app_configs: AppConfigInterface = {
  db: {
    name: 'todo-list.ng'
  }
}
/**
 *
 */
export let APP_CONFIG = new OpaqueToken('app.config');
