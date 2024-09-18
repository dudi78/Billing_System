import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  show = false;
  message = '';

  showNotification(message: string): void {
    console.log('showNotification called with message:', message);
    this.message = message;
    this.show = true;
    console.log('Notification state:', { show: this.show, message: this.message });

    // Hide the notification after 3 seconds
    setTimeout(() => {
      this.show = false;
      console.log('Notification hidden');
    }, 3000);
  }
}
