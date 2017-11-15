import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';

import { ProductsPage } from "../products/products";

import 'rxjs/add/operator/map';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-detail',
	templateUrl: 'detail.html',
})
export class DetailPage {
	// item:any;
	public base64Image: string;
	
	constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http) {
		// https://scpu2j0uua.execute-api.us-east-1.amazonaws.com/FirstStageOfTesting

		this.base64Image = navParams.get('base64Image');
	}

	getDataFromServer() {
		this.http.get("https://scpu2j0uua.execute-api.us-east-1.amazonaws.com/FirstStageOfTesting").map(res => res.json()).subscribe(data => {
			console.log(data);
		});
	}

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

	ionViewDidLoad() {
		console.log('ionViewDidLoad DetailPage');
	}

}
