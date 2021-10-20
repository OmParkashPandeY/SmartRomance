import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Country, State, City } from 'country-state-city';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public usersProfileForm!: FormGroup;
  public listOfAllCountry: any;
  public listOfAllState: any;
  public listOfAllCity: any;

  constructor() { }

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
    console.log(this.listOfAllState);
  }
  //---------------------------------------------------------------------------------
  public getAllCityList() {
    this.listOfAllCity = City.getCitiesOfState('IN', 'BR');

    console.log(this.listOfAllCity);
  }

  //---------------------------------------------------------------------------------
  public createRegForm() {
    this.usersProfileForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      email: new FormControl(null),
      dateOfBirth: new FormControl(null),
      gender: new FormControl("Male"),
      password: new FormControl(null),
      confirmPassword: new FormControl(null),
      phoneNumber: new FormControl(null),
      maritalStatus: new FormControl("Unmarried"),
      countryName: new FormControl('Select Country'),
      stateName: new FormControl("Select State"),
      cityName: new FormControl("Select City"),

    });
  }
  //---------------------------------------------------------------------------------
  get firstName() { return this.usersProfileForm.get('firstName') }
  get lastName() { return this.usersProfileForm.get('lastName') }
  get email() { return this.usersProfileForm.get('email') }
  get dateOfBirth() { return this.usersProfileForm.get('dateOfBirth') }
  get gender() { return this.usersProfileForm.get('gender') }
  get password() { return this.usersProfileForm.get('password') }
  get confirmPassword() { return this.usersProfileForm.get('confirmPassword') }
  get maritalStatus() { return this.usersProfileForm.get('maritalStatus') }
  get phoneNumber() { return this.usersProfileForm.get('phoneNumber') }
  get country() { return this.usersProfileForm.get('country') }
  get city() { return this.usersProfileForm.get('city') }
  get state() { return this.usersProfileForm.get('state') }



  GetRegistationValue() {
    console.log("hello")
    console.log(this.usersProfileForm.value);
  }
  // ------------------------------------------------------------------------------------------



}