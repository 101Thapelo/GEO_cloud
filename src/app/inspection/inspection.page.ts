import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController } from '@ionic/angular/providers/nav-controller';
@Component({
  selector: 'app-inspection',
  templateUrl: './inspection.page.html',
  styleUrls: ['./inspection.page.scss'],
})
export class InspectionPage implements OnInit {
  currentImage: any
  constructor(public navCtrl: NavController, private camera: Camera) { }
 
  ngOnInit() {
    
    }
  }


