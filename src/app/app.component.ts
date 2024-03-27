import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeBankComponent } from './home-bank/home-bank.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    UserComponent,
    HomeBankComponent,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  // template: `<app-user></app-user>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  city = 'valledupar';
  isLogin = false;
  numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'X'];
  contraseña = 1234;
  handlePin(num: string) {
    console.log('diste clicked', num);
    if (this.pin.length < 4 && num !== 'X') {
      this.pin = this.pin + num;
    }
    if (num === 'X') {
      if (this.pin.length > 0) {
        const nuevoPin = this.pin.slice(0, -1);
        this.pin = nuevoPin;
      }
    }
  }
  veriPass() {
    if (this.contraseña === +this.pin) {
      this.isLogin = true;
      console.log('contraseña correcta');
    }
  }

  title = 'IA1';
  pin = '';
}
