import { Injectable } from '@angular/core';

@Injectable()
export class TranslatorService {

  /** Constructor */
  public constructor () {}

  /** Translate */
  public _(txt:string):string {
    return txt;
  }
}
