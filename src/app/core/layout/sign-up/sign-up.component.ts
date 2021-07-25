import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {of, Subject} from "rxjs";
import {delay, finalize, tap} from "rxjs/operators";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  private _formError = new Subject<boolean>();
  formError = this._formError.asObservable();

  constructor(private _fb: FormBuilder) {
    this.registerForm = _fb.group({
      storeName: new FormControl('', Validators.required),
      storeType: new FormControl('', Validators.required),
      adminName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(8),
        Validators.maxLength(8)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  storeType = [
    {label: 'فرد', icon: 'pi-user', key: 1},
    {label: 'مؤسسة', icon: 'pi-users', key: 2},
    {label: 'شركة', icon: 'pi-briefcase', key: 3}
  ];

  ngOnInit(): void {
  }

  checkForm(): void {
    of(null).pipe(
      tap(() => this._formError.next(true)),
      delay(3000),
      finalize(() => this._formError.next(false))
    ).subscribe();
  }

  catchFormErrors(controlName: string, errorType: string): boolean {
    return this.registerForm.invalid && this.registerForm.controls[controlName].getError(errorType);
  }

}
