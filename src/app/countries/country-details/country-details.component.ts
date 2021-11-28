import { Component, OnInit } from '@angular/core';
import { Countries } from 'src/app/interfaces/countries';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  country: Countries[] = [];

  constructor( private countryService: CountryService) { }

  ngOnInit(): void {
    this.country = this.countryService.getCountries();
    console.log(this.country);
    
  }

}
