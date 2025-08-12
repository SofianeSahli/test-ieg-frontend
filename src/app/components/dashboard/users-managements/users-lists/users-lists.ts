import { Component, inject, OnInit, signal } from '@angular/core';
import { SubNavBar } from '../../../widgets/sub-nav-bar/sub-nav-bar';
import { Card } from '../../../widgets/card/card';
import { ActivatedRoute, Router } from '@angular/router';
import { Routes } from '../../../../config/routes';
import { Store } from '@ngrx/store';
import { selectUser } from '../../../../store/features/auth/auth.selector';
import { filter, map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-users-lists',
  imports: [SubNavBar, Card],
  templateUrl: './users-lists.html',
  styleUrl: './users-lists.scss',
})
export class UsersLists implements OnInit {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  store = inject(Store);
  //employees = this.store.selectSignal(selectAllEmployees);
  ngOnInit(): void {}

  onEdit(item: any) {}

  onDelete(item: any) {}

  addEntryClicked() {
    this.router.navigate([Routes.DASHBOARD.USER_MANAGEMENT.ADD], {
      relativeTo: this.activatedRoute,
    });
  }
}
