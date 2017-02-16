import { AbstractModel as Core_AbstractModel } from '../core/abstract.model';

/**
 *
 */
export class ProductModel extends Core_AbstractModel {

  public static readonly IMG:string = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNThmY2E3NmMxMiB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1OGZjYTc2YzEyIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxNCIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=';

  /**  */
  public static readonly TABLE_NAME:string = 'PRODUCT';

  /**  */
  protected static _arrActive:string[] = [
    'Chưa kích hoạt',
    'Kích hoạt'
  ];

  /**  */
  public static returnArrActive():string[] {
    return ProductModel._arrActive;
  }

  /**  */
  public code:string;

  /**  */
  public name:string;

  /**  */
  public price:number;

  /**  */
  public note:string;

  /**  */
  public active:number;
  /**  */
  public getActive():number { return this.active; }
  /**  */
  public setActive(data:number):ProductModel {
    data = (ProductModel.ACTIVE_NO === data) ? data : ProductModel.ACTIVE_YES;
    this.active = data;
    return this;
  }

  /**  */
  public img:void|File;
  /**  */
  public setImg(img?:File) {
    this.img = img;
  }
  /**  */
  public getImg():void|File {
    return this.img;
  }
  /**  */
  public getImgBase64() {
    return (this.img instanceof File)
      ? window.URL.createObjectURL(this.img)
      : ProductModel.IMG
    ;
  }

  /**  */
  public static readonly ACTIVE_NO:number = 0;
  /**  */
  public static readonly ACTIVE_YES:number = 1;

  /** Initialize */
  protected init(data?:any):ProductModel {
    /**  */
    this.code = data['code'] ? ('' + data['code']) : '';
    /**  */
    this.name = data['name'] ? ('' + data['name']) : '';
    /**  */
    this.price = data['price'] ? +data['price'] : 0;
    /**  */
    this.note = data['note'] ? ('' + data['note']) : '';
    /**  */
    this.setActive(data['active']);
    //
    return this;
  }
}
