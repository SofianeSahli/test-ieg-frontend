import { Component, inject, OnInit } from '@angular/core';
import { NavBar } from '../../widgets/nav-bar/nav-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  imports: [NavBar, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  store = inject(Store);

  ngOnInit(): void {}
}
