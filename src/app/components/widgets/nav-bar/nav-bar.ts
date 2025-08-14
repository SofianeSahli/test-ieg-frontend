import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Routes } from '../../../config/routes';
import { AsyncPipe, CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NotificationSocketService } from '../../../store/services/ws.service';
import { Store } from '@ngrx/store';
import { NotificationsActions } from '../../../store/features/notifications/notifications.action';
import { selectAllNotifications } from '../../../store/features/notifications/notifications.selector';
import { Notification } from '../../../store/states/NotificationsState';
import { AuthActions } from '../../../store/features/auth/auth.action';

@Component({
  selector: 'app-nav-bar',
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule,
    NgbCollapseModule,
    AsyncPipe,
  ],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
  animations: [
    trigger('slideInOut', [
      state('out', style({ width: '0px', padding: '0' })),
      state('in', style({ width: '100%', padding: '0.5rem' })),

      transition('in <=> out', [animate('300ms ease-out')]),
    ]),
  ],
})
export class NavBar {
  ROUTES = [
    {
      title: 'routings.home',
      url: '/' + Routes.DASHBOARD.HOME,
    },
    {
      title: 'routings.profile',
      url: Routes.DASHBOARD.PROFILE.INDEX,
    },
  ];
  isCollapsedSearchCollapsed = true;
  isCollapsed = false;
  isNotificationOpen = false;
  unreadCount = 0;
  store = inject(Store);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  notificaitons$ = this.store.select(selectAllNotifications);
  constructor(private notifService: NotificationSocketService) {
    this.notifService.connect();
    this.notifService.notifications$.subscribe((notification) => {
      //this.notifications.unshift(notif);

      this.store.dispatch(NotificationsActions.addOneNotif({ notification }));
      this.unreadCount++;
    });
    this.store.dispatch(NotificationsActions.getNotifications());
    this.notificaitons$.subscribe((value) => console.log(value));
  }

  toggleNotifications() {
    this.isNotificationOpen = !this.isNotificationOpen;
    if (this.isNotificationOpen) this.unreadCount = 0;
  }

  getNotif(notif: Notification) {
    this.isNotificationOpen = !this.isNotificationOpen;

    console.log(notif);
    this.router.navigate([Routes.DASHBOARD.POSTS.ADD], {
      queryParams: {
        post: notif.postId,
      },
      relativeTo: this.activatedRoute,
    });
  }
  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
