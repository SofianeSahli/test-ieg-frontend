import { isPlatformBrowser } from '@angular/common';
import { Component, inject, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyForm, FormlyModule } from '@ngx-formly/core';
import { Store } from '@ngrx/store';
import { Loader } from '../../widgets/loader/loader';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { attachErrorModalEffect } from '../../../utils/error-modal';
import {
  selectError,
  selectIsLoading,
  selectUser,
} from '../../../store/features/auth/auth.selector';
import { AuthActions } from '../../../store/features/auth/auth.action';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Routes } from '../../../config/routes';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormlyForm, Loader, TranslateModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  private store = inject(Store);
  private modalService = inject(NgbModal);
  user$ = this.store.select(selectUser);
  loginErrors = this.store.selectSignal(selectError);
  loading$ = this.store.select(selectIsLoading);
  router = inject(Router);
  form = new FormGroup({});
  model = {
    username: '',
    password: '',
  };

  fields: FormlyFieldConfig[] = [
    {
      wrappers: ['section'],
      props: {
        label: 'labels.login',
      },
      fieldGroup: [
        {
          key: 'username',
          type: 'input',
          props: {
            label: 'labels.email_username',
            placeholder: 'labels.email_username',
            required: true,
          },
        },
        {
          key: 'password',
          type: 'input',
          props: {
            type: 'password',
            label: 'labels.password',
            placeholder: 'labels.password',
            required: true,
          },
        },
      ],
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      attachErrorModalEffect(this.loginErrors, this.modalService);
    }
  }

  ngOnInit(): void {
    this.store.dispatch(AuthActions.checkSession());
  }

  onSubmit() {
    this.store.dispatch(AuthActions.login(this.model));
  }
  navto() {
    this.router.navigate([Routes.AUTH.REGISTER]);
  }
}
