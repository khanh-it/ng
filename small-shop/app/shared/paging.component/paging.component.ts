import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-paging',
  templateUrl: 'paging.component.html',
  //styleUrls: [ ],
})
export class PagingComponent implements OnInit {

  protected static _defaultItemsPerPage:number = 50;
  public static get defaultItemsPerPage():number {
    return self._defaultItemsPerPage;
  }
  public static set defaultItemsPerPage(itemsPerPage:number) {
    if (itemsPerPage < 0) {
       itemsPerPage = 0;
    }
    self._defaultItemsPerPage = itemsPerPage;
  }

  /** */
  protected _totalItems:number = 0;
  public get totalItems():number {
    return this._totalItems;
  };
  @Input() public set totalItems(totalItems:number) {
    this._totalItems = totalItems;
  };

  /** */
  protected _itemsPerPage:number = self.defaultItemsPerPage;
  public get itemsPerPage():number {
    return this._itemsPerPage;
  };
  @Input() public set itemsPerPage(itemsPerPage:number) {
    if (itemsPerPage <= 0) {
      itemsPerPage = 1;
    }
    this._itemsPerPage = itemsPerPage;
  };

  /** */
  protected _currentPage:number = 1;
  public get currentPage():number {
    return this._currentPage;
  };
  @Input() public set currentPage(currentPage:number) {
    let pages = this.totalPages.length;
    if (currentPage > pages) {
      currentPage = pages;
    }
    if (currentPage < 0) {
      currentPage = 0;
    }
    this._currentPage = currentPage;
  };

  /** */
  public get totalPages():number[] {
    let pages = Math.ceil(this._totalItems / this._itemsPerPage);
    let totalPages:number[] = [];
    for (let i = 1; i <= pages; i++) {
      totalPages.push(i);
    }
    return totalPages;
  };

  /** */
  public get offset():number {
    return (this._currentPage - 1) * this._itemsPerPage;
  }

  /**  */
  @Output() public onPageChanges:EventEmitter<{'page': number, 'offset':number, 'pager': PagingComponent}> = new EventEmitter();
  public go(page:number):void {
    this.currentPage = page;
    this.onPageChanges.emit({
      'page': page,
      'offset': this.offset,
      'pager': this
    });
  }

  constructor() {}

  ngOnInit() {
    console.log('ngOnInit');
    console.log('totalItems: ', this.totalItems);
    console.log('itemsPerPage: ', this.itemsPerPage);
    console.log('totalPages: ', this.totalPages);
    console.log('currentPage: ', this.currentPage);
  }
}
// Create self reference
const self = PagingComponent;
