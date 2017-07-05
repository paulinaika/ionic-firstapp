import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

/**
 * Generated class for the BuyoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage {
  productData: {name: string, quantity: number};

  constructor (private navParams: NavParams, private navCtrl: NavController) {
    this.productData = this.navParams.data;
  }
  onConfirmPurchase() {
    this.navCtrl.popToRoot();

  }
}
