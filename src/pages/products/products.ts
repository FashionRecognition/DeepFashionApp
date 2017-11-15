import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
	item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
	  this.item = JSON.parse(navParams.get('item').itemInside);

	//   this.item = navParams.get('item');
	  console.log(this.item);
	  console.log(navParams.get('item'));
  }

  ionViewDidLoad() {
	console.log('ionViewDidLoad ProductsPage');
  }

  goToPage() {
    const browser = this.iab.create(this.item.UrlToPage);
  }

}
