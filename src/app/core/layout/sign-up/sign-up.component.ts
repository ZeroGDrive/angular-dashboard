import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { of, Subject } from 'rxjs';
import { delay, finalize, tap, share } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  formError = false;
  public _formError = new Subject<boolean>();

  constructor(
    private _fb: FormBuilder,
    private _changeDetector: ChangeDetectorRef
  ) {
    this.registerForm = this._fb.group({
      storeName: new FormControl('', Validators.required),
      storeType: new FormControl('', Validators.required),
      adminName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });

    // showing the error message
    this._formError.asObservable().subscribe((value: boolean) => {
      this.formError = value;
      this._changeDetector.detectChanges();
    });
  }

  storeType = [
    { label: 'فرد', icon: 'pi-user', key: 1 },
    { label: 'مؤسسة', icon: 'pi-users', key: 2 },
    { label: 'شركة', icon: 'pi-briefcase', key: 3 },
  ];

  ngOnInit(): void {}

  checkForm(): void {
    of(null)
      .pipe(
        tap(() => this._formError.next(true)),
        delay(3000),
        finalize(() => this._formError.next(false))
      )
      .subscribe();
  }

  catchFormErrors(controlName: string, errorType: string): boolean {
    return (
      this.registerForm.invalid &&
      this.registerForm.controls[controlName].getError(errorType)
    );
  }
}
