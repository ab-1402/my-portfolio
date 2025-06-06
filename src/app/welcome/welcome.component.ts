// welcome.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  showWelcome = true;

  ngOnInit() {
    setTimeout(() => {
      this.showWelcome = false;
    }, 3500);
  }
}
