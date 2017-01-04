/**
 * Super class for based class model...
 */
export abstract class AbstractModel {

  /**
   *
   */
  public static readonly TABLE_NAME:string = '';

  /**
   *
   */
  public static getDDocName(index:string):string {
    return this.TABLE_NAME + '/' + index;
  }

  /** Table name */
  public TBL:string = '';

  /** Primary */
  public _id:string = '';

  /** Revision */
  public _rev:string = '';

  /** Initialize */
  protected static genIDStr() {
    return (new Date()).toISOString();
  }

  /** Constructor */
  public constructor (data?:any) {
    // Format data
    if (Object.prototype.toString.call(data) !== "[object Object]") {
      data = {};
    }
    // Auto init
    // --- Table name
    this.TBL = data.TBL = '' + (data.TBL ? data.TBL
      : Object.getPrototypeOf(this).constructor.TABLE_NAME
    );
    if (!this.TBL) {
      throw Error('Missing TABLE_NAME for model constructor!');
    }
    // --- ID
    this._id = data._id = '' + (data._id ? data._id : AbstractModel.genIDStr());
    // --- Revision
    this._rev = data._rev = data._rev;

    // Initialize
    this.init(data);
  }

  /** Self generate id */
  public genID():string {
    return (this._id = AbstractModel.genIDStr());
  }

  /** Get/Set id */
  public id(id?:string):string {
    if (!id) {
      id = this._id;
    }
    return (this._id = id);
  }

  /** Initialize */
  protected abstract init(data?:any):any;
}
