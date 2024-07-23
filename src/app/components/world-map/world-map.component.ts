import { Component, Input, OnInit } from '@angular/core';
import { WorldMapService } from '../../world-map.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import API from '../../services';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css',
})
export class WorldMapComponent implements OnInit {
  countries = [];
  been: any = [];

  constructor(
    private worldMapService: WorldMapService,
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadCountries();
  }

  // loadCountries(): void {
  //   this.worldMapService.getCountries().subscribe((data) => {
  //     this.countries = data;
  //   });
  // }

  loadCountries() {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.authService.getToken()}`
    );
    this.httpClient.get(API.HOME.BEEN, { headers }).subscribe({
      next: (response) => {
        this.been = response;
      },
      error: (err) => {
        console.error('Error loading countries', err);
      },
    });
  }

  onCountryClick(countryName: string): void {
    console.log(`Clicked on: ${countryName}`);
    // Handle your click logic here
  }

  highlightCountry(countryName: string): void {
    const countryElement = document.querySelector(`[name="${countryName}"]`);
    if (countryElement) {
      countryElement.classList.add('highLight');
    }
  }

  unhighlightCountry(): void {
    const highlightedElements = document.querySelectorAll('.highLight');
    highlightedElements.forEach((element) => {
      element.classList.remove('highLight');
    });
  }
}
