import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from "rxjs";
import { concatMap, finalize, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private _loading = new BehaviorSubject<boolean>(false);
  loading = this._loading.asObservable();

  constructor() {
  }

  showLoaderUntilCompleted<T>(obs: Observable<T>): Observable<T> {
    return of(null).pipe(
      tap(() => this.loadingOn()),
      concatMap(() => obs),
      finalize(() => this.loadingOff())
    );
  }

  loadingOn(): void {
    this._loading.next(true);

  }

  loadingOff(): void {
    this._loading.next(false);
  }
}
