/* Application Configs */
import { app_config } from '../app-config';

// Services
import { PouchdbDbService, PDBQueryResponse } from './db.service/pouchdb-db.service';

// Re exports
export { PDBQueryResponse };

/** */
export abstract class AbstractRepoService {

  protected _dbS:PouchdbDbService;

  /** */
  constructor() {
    this._dbS = new PouchdbDbService();
  }

  /** Initialize */
  protected abstract init(options?:any):any;
}
