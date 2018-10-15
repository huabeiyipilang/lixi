import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var calendar: any;

const BIRTHDAY = 1478348880000;
const A_DAY = 24 * 60 * 60 * 1000;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  //生日Date对象
  birthdayDate: Date;
  birthdayDateStart: Date;
  //农历生日对象
  lunarDate: any;
  respObject: any;
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.http.get('http://176.122.189.169:28789/lixi/bithdayinfo').subscribe(data => {
      this.respObject = data;
      this.birthdayDate = new Date(this.respObject.birthTime);
    });
  }

  /**
   * 格式生日
   */
  getFormatBirthday() {
    if (!this.birthdayDate) {
      return "";
    }
    return this.birthdayDate.getFullYear() + "年" + this.birthdayDate.getMonth() + "月" + this.birthdayDate.getDay() + "日"
      + " " + this.birthdayDate.getHours() + ":" + this.birthdayDate.getMinutes();
  }

  /**
   * 出生天数
   */
  getDaysAfterBirthday() {
    if (!this.respObject) {
      return "";
    }
    return this.respObject.liveDays;
  }

  /**
   * 下一个农历生日的阳历日期
   */
  getSolarDateNextLunarBirthday() {
    if (!this.respObject) {
      return "";
    }
    return this.respObject.nextBirthday;
  }

  /**
   * 距下一个生日还有多少天
   */
  getDaysBeforeNextBirthday() {
    if (!this.respObject) {
      return "";
    }
    return this.respObject.nextBirthdayCountdown;
  }

  /**
   * 农历出生日期
   */
  getLunarFormatDate() {
    if (!this.respObject) {
      return "";
    }
    return this.respObject.lunarDate;
  }

  /**
   * 属相
   */
  getAnimal() {
    if (!this.respObject) {
      return "";
    }
    return this.respObject.animal;
  }
}
