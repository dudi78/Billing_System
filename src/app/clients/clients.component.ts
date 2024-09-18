import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

interface Client {
  customerId: number;
  customerName: string;
  customerAddress: string;
  email: string;
  tel: string;

}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  showModal = false;
  clientsData: Client[] = [];
  filteredClients: Client[] = [];
  theclient: Client = {
    customerId: 0,
    customerName: '',
    customerAddress: '',
    email: '',
    tel: ''
  };
  searchTerm: string = '';

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientService.allClients().subscribe((data: Client[]) => {
      this.clientsData = data;
      this.filteredClients = [...this.clientsData];
      console.log('Clients loaded:', this.clientsData);
    }, error => {
      console.error('Error loading clients:', error);
    });
  }


  deleteClient(client: Client): void {
    const clientId = client.customerId;

    const isConfirmed = window.confirm('Are you sure you want to delete this client?');

    if (isConfirmed && clientId && !isNaN(clientId)) {
      this.clientService.deleteClient(clientId).subscribe(response => {
        console.log('Client deleted:', response);
        this.loadClients(); // Reload clients after deletion
      }, error => {
        console.error('Error deleting client:', error);
      });
    } else {
      console.log('Client deletion cancelled or invalid client ID.');
    }
  }

  edit(client: Client): void {
    this.theclient = { ...client };
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  refreshClients(): void {
    this.loadClients();
  }

  filterClients(): void {
    if (this.searchTerm) {
      this.filteredClients = this.clientsData.filter(client =>
        client.customerName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredClients = [...this.clientsData];
    }
  }
}
