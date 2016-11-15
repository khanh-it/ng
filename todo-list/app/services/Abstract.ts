//
//import {  } from '@angular/core';

// Configs
import { AppConfigInterface,  APP_CONFIG } from '../configs';

/** */
export abstract class ServiceAbstract {
  /** */
  constructor(protected _appConfigs: AppConfigInterface) {}
}
