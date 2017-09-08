import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from '@ionic-native/device';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController , public device: Device) 
  {
    alert('Device UUID is: ' + this.device.uuid);
    alert('Device UUID is: ' + this.device.uuid);
  }

}
