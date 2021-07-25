import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthContainerComponent implements OnInit {

  constructor(private _router: Router) { }
  currentUrl = '';

  ngOnInit(): void {
    this.currentUrl = this._router.url;
  }

}
