import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';


declare var google;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage

 {
  card : Array <any> =[];
  
  constructor(public navCtrl : NavController,private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,) 
  {
     this.card=['alberton','Johannesburg','Brakpan','KemptonPark','Hillbrow','Johannesburg','Johannesburg','Johannesburg'];
    
  }


}
