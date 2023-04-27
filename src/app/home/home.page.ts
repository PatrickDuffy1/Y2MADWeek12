import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  coordinates: any = "";
  lat: number = 0;
  long: number = 0;
  time:number = 0;

  constructor() { }

  async getGPS() 
  {
    this.coordinates = await Geolocation.getCurrentPosition();
    this.lat = this.coordinates.coords.latitude;
    this.long = this.coordinates.coords.longitude;
    this.time = this.coordinates.timestamp;
  }

  async openBrowser()
  {
    await Browser.open({ url: 'http://capacitorjs.com/' });
  }
}
