import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';

// Services
import { PhpjsService } from '../../core/phpjs.service';

//
import { Subject as RxSubject } from 'rxjs/Subject';
Object.defineProperty(window, 'RxSubject', {value: RxSubject});
//console.log('RxSubject: ', RxSubject);

@Component({
  moduleId: module.id,
  selector: 'app-test',
  templateUrl: 'test.component.html',
  styleUrls: [ 'test.component.css' ],
  providers: [ ],
})
export class TestComponent /*implements OnInit*/ {

  @ViewChild('pager')
  protected _pager:any;

  public oneAtATime:boolean = true;
  public items:string[] = ['Item 1', 'Item 2', 'Item 3'];

  public status:Object = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  public groups:any[] = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  public addItem():void {
    this.items.push(`Items ${this.items.length + 1}`);
  }

  constructor (
    protected _phpjsServ: PhpjsService
  ) {

  }

  ngOnInit() {
    console.log('this._pager: ', this._pager);
  }

  public onPagerPageChanges({page, pager}:{page:number, pager:any}) {
    console.log('page: ', page);
    console.log('pager: ', pager);
  }
}
