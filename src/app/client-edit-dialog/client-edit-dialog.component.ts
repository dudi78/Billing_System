import {Component, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {ClientService} from "../client.service";
import {NotificationComponent} from "../notification/notification.component";

@Component({
  selector: 'app-client-edit-dialog',
  templateUrl: './client-edit-dialog.component.html',
  styleUrls: ['./client-edit-dialog.component.css']
})
export class ClientEditDialogComponent {
  @ViewChild(NotificationComponent) notification!: NotificationComponent;

  @Input() clientToUpdate: any;
  @Output() update = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  constructor(private clientService: ClientService) {}

  closeModal(): void {

    this.close.emit();
  }


  onSubmit(): void {
    this.clientService.updateClient(this.clientToUpdate).subscribe({
      next: (response) => {

        console.log('Client updated successfully', response);
        this.refreshClients()
        this.notification.showNotification('Client a été mise à jour avec succès');
        this.closeModal();

      },
      error: (error) => {

        console.error('Error updating client', error);
      }
    });

  }



  refreshClients(): void {
    this.update.emit();

  }
}
