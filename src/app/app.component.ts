import { Component } from '@angular/core';
import { Platform  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase/app';

import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
//import {RegistrationPage} from '../pages/registration/registration';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    //rootPage:any = HomePage;
    rootPage:any;   
    listItems: any;
    ath: AuthProvider;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private afAuth: AngularFireAuth) {
     const authObserver = afAuth.authState.subscribe( user => {
      if (user) {
        this.rootPage = HomePage;
        authObserver.unsubscribe();
      } else {
        this.rootPage = LoginPage;
        authObserver.unsubscribe();
      }
    });
      this.listItems =[{icon:'person',name:'Login'},
                       {icon:'pricetag',name:'Products'},
                       {icon:'log-out',name:'Logout'}];
       // Initialize Firebase
      
     // firebase.initializeApp(config);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
    itemSelected(i){ 
        if(i =='Logout'){ 
            window.localStorage.removeItem('currentuser');
            //this.navCtrl.setRoot(LoginPage);
            //this.rootPage = LoginPage;
        }
    }
}

