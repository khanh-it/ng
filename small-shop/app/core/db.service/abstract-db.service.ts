/* Interfaces */
export interface DbConfig {
  dbname:string,
  host?:string,
  username?:string,
  password?:string,
  charset?:string
};

export abstract class AbstractDbService {

  protected static _defaultConfig:DbConfig = {
    dbname: ''
  };

  /** Constructor */
  public constructor () {
    // Initialize
    this.init(null);
  }

  public static setDefaultConfig(config:DbConfig) {
    AbstractDbService._defaultConfig = config;
  }

  public static getDefaultConfig():DbConfig {
    return AbstractDbService._defaultConfig;
  }

  /** Initialize */
  protected init(options?:any):AbstractDbService {
    return this;
  }
}
