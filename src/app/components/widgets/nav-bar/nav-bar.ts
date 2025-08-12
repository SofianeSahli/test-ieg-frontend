import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '../../../config/routes';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule, CommonModule, TranslateModule, NgbCollapseModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
  public isCollapsed = true;

  ROUTES = [
    {
      title: 'routings.home',
      url: '/' + Routes.DASHBOARD.HOME,
    },
  ];
}
