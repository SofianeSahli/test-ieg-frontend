import { Injectable, OnDestroy } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationSocketService implements OnDestroy {
  private socket?: Socket;
  private notificationSubject = new Subject<any>();

  /** Stream of notifications */
  notifications$ = this.notificationSubject.asObservable();

  connect(): void {
    if (!this.socket) {
      this.socket = io('http://localhost:3000', {
        withCredentials: true,
        transports: ['websocket'], // forces WebSocket instead of polling
      });

      this.socket.on('connect', () => {
        console.log('✅ WebSocket connected to gateway');
      });

      this.socket.on('notification', (notif: any) => {
        console.log('📢 Notification received:', notif);
        this.notificationSubject.next(notif);
      });

      this.socket.on('disconnect', () => {
        console.log('❌ WebSocket disconnected from gateway');
      });
    }
  }

  ngOnDestroy(): void {
    this.disconnect();
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = undefined;
    }
  }
}
