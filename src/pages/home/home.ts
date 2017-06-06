import { Component } from '@angular/core';
import { NavController,AlertController  } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage { 
    listItems: any;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
      if (!this.isLoggedin()) {
          console.log('You are not logged in');
          this.navCtrl.push(LoginPage);
        }
      //this.slides.startAutoplay();
      this.listItems = ['Ali','Ahmed','Aymen','Ameer'];
  }
    isLoggedin() {
        if (window.localStorage.getItem('currentuser')) {
          return true;
        }
      }
    removeItem(item){
        
       let index = this.listItems.indexOf(item);
        if(index > -1){
          this.listItems.splice(index, 1);
        }
    }
     showConfirm(item) {
    let confirm = this.alertCtrl.create({
      title: 'Delete User ('+item+ ')',
      message: 'Are you sure you want to delete the item?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            //console.log('Agree clicked');
              this.removeItem(item);
          }
        }
      ]
    });
    confirm.present();
  }
}

