import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database/public_api';
import { ShoppingItem } from './../../models/shopping-item/shopping-item.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {

  shoppingItem = {} as ShoppingItem;
  shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase) {
      this.shoppingItemRef$ = this.database.list('shopping-list');
  }

  addShoppingItem(shoppingItem: ShoppingItem) {
    this.shoppingItemRef$.push({
      itemName: this.shoppingItem.itemName,
      itemNumber: Number(this.shoppingItem.itemNumber)
    });
    this.shoppingItem = {} as ShoppingItem;
    this.navCtrl.pop();
  }

}
