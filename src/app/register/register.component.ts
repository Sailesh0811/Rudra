import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 employee: Employee;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

addUser() {


}
}
