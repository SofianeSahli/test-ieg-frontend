import { Location } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { debounceTime, Subject, Subscription } from 'rxjs';
export interface NavbarViewConfig {
  showBackButton: boolean;
  showAddButton: boolean;
  title: string | null;
}

@Component({
  selector: 'app-sub-nav-bar',
  imports: [TranslateModule],
  templateUrl: './sub-nav-bar.html',
  styleUrl: './sub-nav-bar.scss',
  animations: [
    trigger('expandSearch', [
      state('collapsed', style({ width: '0px', opacity: 0, padding: '0' })),
      state(
        'expanded',
        style({ width: '100%', opacity: 1, padding: '0.5rem' })
      ),
      transition('collapsed <=> expanded', animate('500ms ease-in-out')),
    ]),
  ],
})
export class SubNavBar {
  @Input() navbarViewConfig!: NavbarViewConfig;
  @Output() addEntryClicked = new EventEmitter<void>();
  @Output() outputEvent = new EventEmitter<string>();

  private searchSubject = new Subject<string>();
  private subscription: Subscription = this.searchSubject
    .pipe(debounceTime(400))
    .subscribe((value) => this.outputEvent.emit(value));
  private readonly router = inject(Router);
  private readonly location = inject(Location);
  searchActive = signal(false);
  searchText = signal('');

  goBack() {
    this.location.back();
  }
  toggleSearch() {
    this.searchActive.update((v) => !v);
    if (!this.searchActive()) {
      this.searchText.set('');
    }
  }

  onInputChange($event: any) {
    const input = $event.target as HTMLInputElement;

    this.searchSubject.next(input.value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
