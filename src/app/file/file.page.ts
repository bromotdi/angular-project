import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})

export class FilePage implements OnInit {

  data: any = [];

  showDetails: boolean[] = new Array(1000).fill(false);
  dataUrl = 'https://api.jsonbin.io/b/602a5812f460fe73a196ccb0/3';
  loading: any;

  constructor(public loadingController: LoadingController) {
  }

  async load() {
    this.loading = await this.loadingController.create({
      spinner: "bubbles",
      message: 'Loading...'
    });

    await this.loading.present();
    fetch(this.dataUrl).then(res => res.json())
      .then(json => {
        this.data = json;
        console.log(this.data);
        this.loading.dismiss();

      });
  }
 
  toggleDetails(i: number) {
    if (this.showDetails[i]) {
      this.showDetails[i] = false;
    }

    else {
      this.showDetails[i] = true;
    }
  }
  
  getGreenColor(a:string, b:string) {
    return a==b ? 'green' : '';
  }

      ngOnInit(){

      }
    }