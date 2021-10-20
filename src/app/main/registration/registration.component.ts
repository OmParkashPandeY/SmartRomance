import { Component, OnInit } from '@angular/core';
import { Country, State, City } from 'country-state-city';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(Country.getAllCountries());
    console.log(State.getAllStates());
  }

}
