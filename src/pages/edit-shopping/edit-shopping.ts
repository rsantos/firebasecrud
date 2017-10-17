import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shopping',
  templateUrl: 'edit-shopping.html',
})
export class EditShoppingPage {

  shoppingItemRef$: FirebaseObjectObservable<ShoppingItem>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase) {
      const shoppingItemId = this.navParams.get('shoppingItemId');
      this.shoppingItemRef$ = this.database.object(`shopping-list/${shoppingItemId}`);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditShoppingPage');
  }

}
