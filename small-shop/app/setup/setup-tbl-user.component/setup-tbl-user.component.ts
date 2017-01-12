import { Component, OnInit } from '@angular/core';

/** Services */
import { PouchdbDbService } from '../../core/db.service/pouchdb-db.service';
import { UserRepoService } from '../../core/user-repo.service';

/** Models */
import { UserModel } from '../../core/user.model';

declare var emit:Function;

@Component({
  moduleId: module.id,
  selector: 'app-setup-tbl-user',
  templateUrl: 'setup-tbl-user.component.html',
  providers: [ ],
})
export class SetupTblUserComponent implements OnInit {

  constructor(
    protected _pouchdbServ: PouchdbDbService,
    protected _useRepoServ: UserRepoService
  ) {}

  ngOnInit() {
    // design document
    let tblName = UserModel.TABLE_NAME;
    let ddocID = '_design/' + tblName;
    let ddoc = {
      '_id': ddocID,
      'views': {},
      '_rev': ''
    };
    // ---
    ddoc.views[tblName] = {
      map: function(doc:any) {
        if ('USER' === doc.TBL) {
          emit(doc._id);
        }
      }.toString()
    };
    // ---
    ddoc.views['UNIQ_username'] = {
      map: function (doc:any) {
        if ('USER' === doc.TBL && doc.username) {
          emit(doc.username);
        }
      }.toString()
    };
    //console.log('[SetupTblUserComponent] ddoc: ', ddoc);

    // insert, or update design document
    this._pouchdbServ.get(ddocID)
      .then((rt:any) => { return rt; }, () => {})
      .then((rt:any) => {
        ddoc._rev = (rt && rt._rev);
        return this._pouchdbServ.put(ddoc).then(() => {
          return this._pouchdbServ.query(tblName, {'limit': 0}).then((rt) => {
            console.log('[SetupTblUserComponent] alter design document done!', rt);
          });
        });
      })
      // add predefined user(s)
      .then(() => {
        let arr = [];
        for (let i = 1; i <= 1; i++) {
           let userAdmin = new UserModel({
             'username': 'admin',
             'password': 'admin',
             'fullname': 'Administrator',
          });
          userAdmin.selfEncodePassword();
          console.log('[SetupTblUserComponent] userAdmin:', userAdmin);
          arr.push(
            this._pouchdbServ.putUniq(tblName + '/UNIQ_username', 'username', userAdmin)
          );
        }
        Promise.all(arr)
          .then(() => {}, (err:Error) => { console.error(err); })
          .then(() => {
            this._pouchdbServ
              .query('USER', {include_docs: true})
              .then((rt) => {
                console.log('[SetupTblUserComponent] setup ended. Data: ', rt);
              })
            ;
          })
        ;
      })
    ;
  }
}
