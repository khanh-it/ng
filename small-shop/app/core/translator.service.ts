import { Injectable } from '@angular/core';

@Injectable()
export class TranslatorService {

  /** Constructor */
  public constructor () {}

  /** Translate */
  public _(txt:string, data?:any):string {
    if (data) {
      for (let prop in data) {
        txt = txt.replace('%' + ('' + prop) + '%', '' + data[prop]);
      }
    }
    return txt;
  }
}
