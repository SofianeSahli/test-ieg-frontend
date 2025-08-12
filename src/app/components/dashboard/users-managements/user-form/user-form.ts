import { Component, inject, PLATFORM_ID } from '@angular/core';
import { SubNavBar } from '../../../widgets/sub-nav-bar/sub-nav-bar';
import { Store } from '@ngrx/store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [SubNavBar],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss'
})
export class UserForm {
  /*store = inject(Store);
  loading$ = this.store.select(selectIsLoading);
  private modalService = inject(NgbModal);
  profilesUpdateErrors = this.store.selectSignal(selectError);
  fields: FormlyFieldConfig[] = [];
  form = new FormGroup({});
  model: any = {};
  plateformId = inject(PLATFORM_ID)
*/
}
