import { OpaqueToken } from '@angular/core';

/**
 *
 */
export interface AppConfigInterface {
  db: {
    name:string
  }
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
