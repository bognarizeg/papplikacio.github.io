import { Component, Output } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  @Output () message: {email: string, message: string} = {
    email: '',
    message: ''
  };
  constructor(public http: HttpClientModule) {

  
  }
sendMessage() {
  console.log(this.message)}
}
