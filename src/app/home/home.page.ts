import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  constructor(private iab: InAppBrowser) {
    const browser = this.iab.create('https://www.unisagrado.edu.br');

    //browser.executeScript(...);
    //browser.insertCSS(...);
    browser.on('loadstop').subscribe(event => {
      browser.executeScript({code: "var img=document.getElementsByClassName('site-logo'); img.src='http://cordova.apache.org/images/cordova_bot.png';"});
      browser.insertCSS({ code: "body{color: red}" });
    });

    browser.close();
    
  }

  


}
