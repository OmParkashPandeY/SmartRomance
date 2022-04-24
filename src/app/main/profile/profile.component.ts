import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Country, State, City } from 'country-state-city';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public usersProfileForm!: FormGroup;
  public listOfAllCountry: any;
  public listOfAllState: any;
  public listOfAllCity: any;

  constructor() {}

  ngOnInit(): void {
    this.createRegForm();
    this.getAllCityList();
    this.getAllContryList();
  }
  //---------------------------------------------------------------------------------
  public getAllContryList() {
    this.listOfAllCountry = Country.getAllCountries();
  }
  //---------------------------------------------------------------------------------
  public getAllStateList(countryCode: any) {
    var getCountryCode = countryCode.split(': ')[1];
    this.listOfAllState = State.getStatesOfCountry(getCountryCode);
  }
  //---------------------------------------------------------------------------------
  public getAllCityList() {
    this.listOfAllCity = City.getCitiesOfState('IN', 'BR');

    // console.log(this.listOfAllCity);
  }

  //---------------------------------------------------------------------------------
  public createRegForm() {
    this.usersProfileForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null),
      email: new FormControl(null),
      dateOfBirth: new FormControl(null),
      gender: new FormControl('Male'),
      password: new FormControl(null),
      confirmPassword: new FormControl(null),
      phoneNumber: new FormControl(null),
      maritalStatus: new FormControl('Unmarried'),
      countryName: new FormControl('Select Country'),
      stateName: new FormControl('Select State'),
      cityName: new FormControl('Select City'),
    });
  }
  //--------------------------------------------------------------------------------------------------

  public isInValidForm = false;
  GetRegistationValue() {
    if (this.usersProfileForm.invalid) {
      this.isInValidForm = true;
    } else {
      console.log(this.usersProfileForm.value);
    }
  }
  //--------------------------------------------------------------------------------------------------
  runFormValidation(fieldName: any) {
    var formController = this.usersProfileForm.controls;
    if (
      formController[fieldName].invalid &&
      (formController[fieldName].dirty ||
        formController[fieldName].touched ||
        this.isInValidForm == true)
    ) {
      return true;
    } else {
      return false;
    }
  }
  // ------------------------------------------------------------------------------------------
}
