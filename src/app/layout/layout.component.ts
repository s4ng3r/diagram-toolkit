import { Component } from '@angular/core';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { HeaderComponent } from '../components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidenavComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
