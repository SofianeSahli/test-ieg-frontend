import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { attachErrorModalEffect } from '../../../utils/error-modal';
import { Store } from '@ngrx/store';
import {
  selectError,
  selectIsLoading,
  selectUser,
} from '../../../store/features/auth/auth.selector';
import { FormlyFieldConfig, FormlyForm } from '@ngx-formly/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PROFILE_FORM } from './register.form';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { Loader } from '../../widgets/loader/loader';
import { AuthActions } from '../../../store/features/auth/auth.action';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    TranslateModule,
    FormlyForm,
    NgbModalModule,
    Loader,
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  plateformId = inject(PLATFORM_ID);
  store = inject(Store);
  profilesUpdateErrors = this.store.selectSignal(selectError);
  user$ = this.store.select(selectUser);
  private modalService = inject(NgbModal);
  loading$ = this.store.select(selectIsLoading);
  fields: FormlyFieldConfig[] = PROFILE_FORM;
  form = new FormGroup({});
  model: any = {};
  constructor() {
    if (isPlatformBrowser(this.plateformId)) {
      attachErrorModalEffect(this.profilesUpdateErrors, this.modalService);
    }
  }

  submit() {
    if (this.form.valid) {
      this.store.dispatch(
        AuthActions.register({
          profileData: structuredClone(this.model),
        })
      );
    }
  }
}
