import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
  h3{
    color: blue;
  }
  `]
})
export class AppComponent {
  showSecret = false;
  log = [1];

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}
