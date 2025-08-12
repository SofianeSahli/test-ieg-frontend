import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { LatLngExpression } from 'leaflet';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.scss'
})
export class Map extends FieldType<FieldTypeConfig> implements AfterViewInit, OnInit {
  @ViewChild('mapinput', { static: false }) mapContainerRef!: ElementRef<HTMLDivElement>;
  isBrowser: boolean = false
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    super();
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  async ngAfterViewInit() {
    if (!this.isBrowser) return;

    if (isPlatformBrowser(this.platformId) && this.mapContainerRef) {
      const L = await import('leaflet');

      const map = L.map(this.mapContainerRef.nativeElement).setView(
        [36.8065, 10.1815],
        13
      );

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
        minZoom: 1,
      }).addTo(map);
      const initalLocation: LatLngExpression = this.model.address ? [this.model.address.latitude, this.model.address.longitude] : [36.8065, 10.1815];
      const bootstrapIcon = L.divIcon({
        html: `<i class="bi bi-geo-alt-fill fs-3 text-danger"></i>`,
        iconSize: [24, 24],
        className: 'custom-bootstrap-icon' // optional, you can style it
      });
      const marker = L.marker(initalLocation, {
        icon: bootstrapIcon,

        draggable: true,
      }).addTo(map);

      marker.on('dragend', () => {
        const { lat, lng } = marker.getLatLng();
        if (this.model.address) {
          this.updateMapInput(lat, lng)
        }
      });


      map.on('click', (e: L.LeafletMouseEvent) => {
        const { lat, lng } = e.latlng;
        marker.setLatLng([lat, lng]);

      });

    }
  }
  updateMapInput(lat: number, lng: number) {
    this.model.address.latitude = lat;
    this.model.address.longitude = lng;

  }
}
