import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard-view',
  standalone: true,
  templateUrl: './dashboard-view.html',
  styleUrls: ['./dashboard-view.scss'],
  imports: [],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardView implements AfterViewInit, OnInit {
  @ViewChild('map', { static: false })
  mapContainerRef!: ElementRef<HTMLDivElement>;
  isBrowser: boolean = false;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  async ngAfterViewInit() {
    if (!this.isBrowser) return;

    if (isPlatformBrowser(this.platformId) && this.mapContainerRef) {
    }
  }
}
