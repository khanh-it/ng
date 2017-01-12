import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  //RouterState,
  // events
  NavigationStart
} from '@angular/router';
// Services
import { UserRepoService } from './user-repo.service';

@Injectable()
export class AuthCheckService {

  protected _ignores:string[] = [];

  public setIgnores(ignores:string[]):AuthCheckService {
    this._ignores = (ignores instanceof Array) ? ignores : [];
    return this;
  }

  protected static _ROUTE_PATH_PAGE_LOGIN = '/login';

  constructor(
    protected _router: Router,
    protected _route: ActivatedRoute,
    protected _userRepoServ: UserRepoService
  ) {
    // Initilize
    this.init();
  }

  /** Initilize */
  protected init() {
    // Register handlers to router's navigation events...
    this._router.events.subscribe((evt) => {
      if (evt instanceof NavigationStart) {
        // Ignore?
        for (let ignore of this._ignores) {
          if (evt.url.indexOf(ignore) === 0) {
            return;
          }
        }
        // If not in login page
        if (evt.url.indexOf(AuthCheckService._ROUTE_PATH_PAGE_LOGIN) < 0) {
          this.redirect2LoginPageIfNotLoggedIn();
        }
      }
    });
  }

  /**
   * Check user authentication, and redirect 2 login page if not logged in
   */
  public redirect2LoginPageIfNotLoggedIn() {
    this._userRepoServ.getLoggedInUser()
      .then((user) => {
        if (!user) {
          this._router.navigate(
            [AuthCheckService._ROUTE_PATH_PAGE_LOGIN, {'authCheck': 1}],
            {
              relativeTo: this._route,
            }
          );
        }
      })
    ;
  }
}
