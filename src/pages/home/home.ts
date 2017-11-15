import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';

import { DetailPage } from "../detail/detail";
import { ProductsPage } from "../products/products";

import { Camera, CameraOptions } from "@ionic-native/camera";

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	public base64Image: string;
	public cameraURI: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private http:Http) {
	}

	// itemSelected(item) {
	// 	// alert(item.text);
	// 	// this.navCtrl.push(DetailPage, {
	// 	// 	item: item
	// 	// });

	// 	this.navCtrl.push(DetailPage);
	// }

	postDataToServer() {
		let postObj = {
			base64Image: this.base64Image
		}
		
		this.http.post("https://scpu2j0uua.execute-api.us-east-1.amazonaws.com/FirstStageOfTesting", postObj).map(res => res.json()).subscribe(data => {
			console.log(data);
			this.navCtrl.push(ProductsPage, {
				item: {
					itemInside: data
				}
			});
		});
	}

	takePicture() {
		this.camera.getPicture({
			destinationType: this.camera.DestinationType.DATA_URL,
			targetWidth: 1000,
			targetHeight: 1000
		}).then((imageData) => {
			// imageData is a base64 encoded string
			this.base64Image = "data:image/jpeg;base64," + imageData;
			this.navCtrl.push(DetailPage, {
				base64Image: this.base64Image
			})
		}, (err) => {
			console.log(err);
		});

	}

}
