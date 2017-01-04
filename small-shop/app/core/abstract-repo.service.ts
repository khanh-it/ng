/* Application Configs */
import { app_config } from '../app-config';

// Services
import { AbstractDbService } from './db.service/abstract-db.service';

/** */
export abstract class AbstractRepoService {

  //protected _dbA:DbAdapterService;

  /** */
  constructor(protected _dbS:AbstractDbService) {}

  /** Initialize */
  protected abstract init(options?:any):any;
}
