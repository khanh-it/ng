import { Component, OnInit, HostBinding,
  trigger, transition, animate,
  style, state
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

/**/
import { User, UserService } from '../user.service';

/* Operators */
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'app-user-detail',
  templateUrl: 'user-detail.component.html',
  styleUrls: [ 'user-detail.component.css' ],
  providers: [
    UserService
  ],
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})
export class UserDetailComponent implements OnInit {

  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'absolute';
  }

  public user: User;

  constructor(
    protected _route: ActivatedRoute,
    protected _router: Router,
    protected _userService: UserService
  ) {
  }

  ngOnInit() {
    this._route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this._userService.getUser(+params['id']))
      .subscribe((user: User) => this.user = user)
    ;
  }

  ngOnInit2() {
    // (+) converts string 'id' to a number
    let id = +this._route.snapshot.params['id'];
    console.log('UserDetailComponent:ngOnInit#id', id);
  }

  getUserDump():string {
    return JSON.stringify(this.user);
  }

  goBack() {
    let userId = this.user ? this.user.id : null;
    // Pass along the user id if available
    // so that the HeroList component can select that user.
    this._router.navigate(['/user', { id: userId, foo: 'foo' }]);
  }
}
