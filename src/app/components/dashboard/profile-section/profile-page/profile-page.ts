import { Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectError,
  selectIsLoading,
  selectUser,
} from '../../../../store/features/auth/auth.selector';
import { TranslateModule } from '@ngx-translate/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyForm } from '@ngx-formly/core';
import { Loader } from '../../../widgets/loader/loader';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { isPlatformBrowser } from '@angular/common';
import { attachErrorModalEffect } from '../../../../utils/error-modal';
import { AuthActions } from '../../../../store/features/auth/auth.action';
import { PROFILE_FORM } from './profile.form';
import { environment } from '../../../../config/environments/environment';

@Component({
  selector: 'app-profile-page',
  imports: [
    ReactiveFormsModule,
    TranslateModule,
    FormlyForm,
    NgbModalModule,
    Loader,
  ],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.scss',
})
export class ProfilePage implements OnInit {
  store = inject(Store);
  user$ = this.store.select(selectUser);
  loading$ = this.store.select(selectIsLoading);
  private modalService = inject(NgbModal);
  profilesUpdateErrors = this.store.selectSignal(selectError);
  fields: FormlyFieldConfig[] = PROFILE_FORM;
  form = new FormGroup({});
  model: any = {};
  plateformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.plateformId)) {
      attachErrorModalEffect(this.profilesUpdateErrors, this.modalService);
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.plateformId)) {
      this.user$.subscribe((user) => {
        if (user) {
          this.model = structuredClone({
            ...user,
            file:
              environment.apiBaseUrl.replace(/\/api$/, '') +
              user.profilePicture,
          });
        }
      });
    }
  }

  submit() {
    if (this.form.valid) {
      this.store.dispatch(
        AuthActions.updateProfile({ profileData: structuredClone(this.model) })
      );
    }
  }
}
