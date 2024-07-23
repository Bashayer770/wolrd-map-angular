import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private route: Router) {}

  navigateToBeen() {
    this.route.navigate(['been']);
  }
  navigateToprofile() {
    this.route.navigate(['wrapup']);
  }

  // navigateToDiscovery(){
  // this.route.navigate(['discovery'])
  // }
}
