import { EditShoppingPage } from '../edit-shopping/edit-shopping';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { ShoppingItem } from './../../models/shopping-item/shopping-item.interface';
import { AddShoppingPage } from './../add-shopping/add-shopping';
import { Component } from '@angular/core';
import { ActionSheetController, IonicPage, NavController, NavParams } from 'ionic-angular';

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
    private database: AngularFireDatabase,
    private actionSheetCtrl: ActionSheetController) {

    this.shoppingListRef$ = this.database.list('shopping-list');
  }

  selectShoppingItem(shoppingItem: ShoppingItem ) {
    this.actionSheetCtrl.create({
      title: `${shoppingItem.itemName}`,
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            this.navCtrl.push(EditShoppingPage, {
              shoppingItemId: shoppingItem.$key
            });
          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.shoppingListRef$.remove(shoppingItem.$key);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('The user has selected the cancel button');
          }
        }
      ]
    }).present();
  }

  navigateToAddShoppingPage() {
    this.navCtrl.push(AddShoppingPage);
  }

}
