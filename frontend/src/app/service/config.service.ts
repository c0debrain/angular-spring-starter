import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ConfigService {

  private _api_url = '/api';

  private _auth_url = '/auth';

  private _user_url = this._api_url + '/user';

  private _refresh_token_url = this._auth_url + '/refresh';

  private _login_url = this._auth_url + '/login';

  private _logout_url = this._auth_url + '/logout';

  private _whoami_url = this._user_url + '/whoami';

  private _users_url = this._user_url + '/all';

  private _foo_url = this._api_url + '/foo';

  get api_url(): string {
      return this._api_url;
  }

  get refresh_token_url(): string {
      return this._refresh_token_url;
  }

  get whoami_url(): string {
      return this._whoami_url;
  }

  get users_url(): string {
      return this._users_url;
  }

  get login_url(): string {
      return this._login_url;
  }

  get logout_url(): string {
      return this._logout_url;
  }

  get foo_url(): string {
      return this._foo_url;
  }


}
