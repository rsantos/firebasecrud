import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { ShoppingItem } from './../../models/shopping-item/shopping-item.interface';
import { AddShoppingPage } from './../add-shopping/add-shopping';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  shoppingListRef$: FirebaseListObservable<ShoppingItem[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase) {

    this.shoppingListRef$ = this.database.list('shopping-list');
  }

  navigateToAddShoppingPage() {
    this.navCtrl.push(AddShoppingPage);
  }

}
