import { Injectable } from '@angular/core';
import { Countries } from '../interfaces/countries';
import { COUNTRIES } from "../json/countries.json";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  getCountries(): Countries[] {
    return COUNTRIES;
  }
}
