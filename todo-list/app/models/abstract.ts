/**
 * Super class for based class model...
 */
export abstract class AbstractModel {

  public _id:string = '';

  /** Initialize */
  protected static genIDStr() {
    return (new Date()).toISOString();
  }

  /** Constructor */
  public constructor (options?:any) {
    // Auto generate ID
    //this._id = AbstractModel.genID();

    // Initialize
    this.init(options);
  }

  /** Get/Set id */
  public genID(id?:string):string {
    return (this._id = AbstractModel.genIDStr());
  }

  /** Initialize */
  protected abstract init(options?:any);
}
