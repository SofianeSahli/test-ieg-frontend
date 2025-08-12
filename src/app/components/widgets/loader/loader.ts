import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loader',
  imports: [AsyncPipe],
  templateUrl: './loader.html',
  styleUrl: './loader.scss'
})
export class Loader {
  @Input() loading$?: Observable<boolean>;
}
