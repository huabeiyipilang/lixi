import { Component, OnInit } from '@angular/core';

const BIRTHDAY = 1478348880000;
const A_DAY = 24 * 60 * 60 * 1000;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = '李曦的生日';
  birthdayDate: Date;

  ngOnInit() {
    this.birthdayDate = new Date();
    this.birthdayDate.setTime(BIRTHDAY);
    console.log('ngOnInit:' + this.birthdayDate);
  }

  getFormatBirthday() {
    return this.birthdayDate.toLocaleString();
  }

  getDaysAfterBirthday() {
    return Math.floor((new Date().getTime() - BIRTHDAY + A_DAY) / A_DAY); 
  }
}
