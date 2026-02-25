import { SideMenuComponent } from './../../components/side-menu/side-menu.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SideMenuHeaderComponent } from "../../components/side-menu/side-menu-header'/side-menu-header.component";
import { SideMenuOptionsComponent } from '../../components/side-menu/side-menu-options/side-menu-options.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [SideMenuComponent, RouterOutlet],
  templateUrl: './dashboard-page.component.html',
})
export default class DashboardPageComponent {}
