import { Component } from '@angular/core';
import {ClientService} from "../client.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-clientform',
  templateUrl: './clientform.component.html',
  styleUrl: './clientform.component.css'
})
export class ClientformComponent {
  client = {
    customerName: '',
    email: '',
    tel: '',
    customerAddress: ''
  };

constructor(private clientService:ClientService) {
}

  register(registerForm: NgForm) {
    console.log('Form Submitted:', this.client);
    this.clientService.registerClient(this.client).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        alert("Client added successfully");
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
