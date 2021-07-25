import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Observable} from "rxjs";
import {filter, map, share} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  menuActive = true;
  showSideMenu: Observable<boolean>;

  constructor(private _router: Router) {
    this.showSideMenu = this._router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this._router.url),
      map(url => url !== '/login' && url !== '/register'),
      share()
    );
  }
}
