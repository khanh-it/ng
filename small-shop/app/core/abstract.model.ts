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
    return this.TABLE_NAME + (index ? ('/' + index) : '');
  }

  /** Construct data */
  //protected _initData:any;

  /** Table name */
  public TBL:string;

  /** Primary */
  public _id:string;

  /** Revision */
  public _rev:string;

  /** Initialize */
  protected static genIDStr() {
    return (new Date()).toISOString();
  }

  /** Helper: is data plain object? */
  public static isPlainObject(data:any):boolean {
    return (Object.prototype.toString.call(data) === "[object Object]");
  }

  /** Constructor */
  public constructor (data?:any) {
    // Format data
    data = AbstractModel.isPlainObject(data) ? data : {};
    // Auto init
    // --- Table name
    this.TBL = data.TBL = '' + (data.TBL ? data.TBL
      : Object.getPrototypeOf(this).constructor.TABLE_NAME
    );
    // --- ID
    this._id =data._id = '' + (data._id ? data._id : AbstractModel.genIDStr());
    // --- Revision
    this._rev = data._rev = data._rev;
    // Data validation
    if (!this.TBL) {
      throw Error('Missing TABLE_NAME for model constructor!');
    }

    // Initialize
    this.init(/*this._initData = */data);
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
  protected init(data?:any):any {};

  /**
  public fromArray(data:any):void {
    // Format data
    if (!AbstractModel.isPlainObject(data)) {
      data = {};
    }
    for (let prop in data) {
      if (this.hasOwnProperty(prop)) {
        this[prop] = data[prop];
      }
    }
  } */
}
