// jQuery
/// <reference path="../../../node_modules/jquery/typescript/jquery.d.ts"/>

import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';

// Services
import { TranslatorService } from '../translator.service';

@Component({
  moduleId: module.id,
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: [ 'dialog.component.css' ]
})
export class DialogComponent implements OnInit, AfterViewInit {

  /**  */
  protected static _componentLoaded:number = -1;

  /**  */
  @ViewChild('eleAlert') eleAlert:ElementRef;
  protected static _$eleAlert:JQuery;

  /**  */
  @ViewChild('eleConfirm') eleConfirm:ElementRef;
  protected static _$eleConfirm:JQuery;

  /**  */
  @ViewChild('elePrompt') elePrompt:ElementRef;
  protected static _$elePrompt:JQuery;

  /**  */
  constructor(
    protected _tranServ: TranslatorService
  ) {}

  /**  */
  ngOnInit() {
    // Make sure this component is loaded only one time!
    ++DialogComponent._componentLoaded;
    if (DialogComponent._componentLoaded) {
      throw new Error('DialogComponent should be loaded only one time!');
    }
    //Object.defineProperty(window, '_appDialogComp', {value: this});
  }

  /**  */
  ngAfterViewInit() {
    //
    if (!DialogComponent._$eleAlert) {
      DialogComponent._$eleAlert = $(this.eleAlert.nativeElement)
    }//console.log('eleAlert: ', DialogComponent._$eleAlertget(0));
    //
    if (!DialogComponent._$eleConfirm) {
      DialogComponent._$eleConfirm = $(this.eleConfirm.nativeElement)
    }//console.log('eleConfirm: ', DialogComponent._$eleConfirm.get(0));
    //
    if (!DialogComponent._$elePrompt) {
      DialogComponent._$elePrompt = $(this.elePrompt.nativeElement)
    }//console.log('elePrompt: ', DialogComponent._$elePrompt.get(0));
  }

  /**
   * Dialog 'alert'
   */
  public alert(msg?:string):Promise<null> {
    return new Promise((rs, rj) => {
      DialogComponent._$eleAlert
        .attr('hidden', false)
        .find('.app-dialog-body').text('' + msg).end()
        .find('button.btn-ok')
          .one('click', () => {
            DialogComponent._$eleAlert.attr('hidden', true);
            rs(null);
          })
          .focus()
        .end()
      ;
    });
  }

  /**
   * Dialog 'confirm'
   */
  public confirm(msg?:string):Promise<boolean> {
    return new Promise((rs, rj) => {
      DialogComponent._$eleConfirm
        .attr('hidden', false)
        .find('.app-dialog-body').text('' + msg).end()
        .find('button.btn-cancel').one('click', () => {
          rs(!DialogComponent._$eleConfirm.attr('hidden', true));
        }).end()
        .find('button.btn-ok')
          .one('click', () => {
            rs(!!DialogComponent._$eleConfirm.attr('hidden', true));
          })
          .focus()
        .end()
      ;
    });
  }

  /**
   * Dialog 'prompt'
   */
  public prompt(msg?:string, txt?:string):Promise<string> {
    return new Promise((rs, rj) => {
      let $eleInput = DialogComponent._$elePrompt
        .find('.app-dialog-body > input[type="text"]')
        .val('' + txt)
      ;
      DialogComponent._$elePrompt
        .attr('hidden', false)
        .find('.app-dialog-body > span').text('' + msg).end()
        .find('button.btn-ok, button.btn-cancel')
          .one('click', function() {
            let $this = jQuery(this);
            let rt = $this.is('button.btn-cancel') ? null : $eleInput.val();
            DialogComponent._$elePrompt.attr('hidden', true);
            rs(rt);
          })
          .focus()
        .end()
      ;
    });
  }
}
