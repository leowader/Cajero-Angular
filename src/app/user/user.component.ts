import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  // template:`<h2 class="bg-black">hola bro</h2>`,
  // styleUrl: './user.component.css'
})
export class UserComponent {
  name = 'leowader';
  islogin = false;
  array = [
    { name: 'juanca', edad: 25 },
    { name: 'carlos', edad: 15 },
    { name: 'juanca', edad: 25 },
    { name: 'carlos', edad: 15 },
    { name: 'juanca', edad: 25 },
    { name: 'carlos', edad: 15 },
  ];
}
