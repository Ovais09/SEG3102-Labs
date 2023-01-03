import {Component, OnInit} from '@angular/core';
import {AddressEntry} from './address-entry';
import {NotificationService} from './notification.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css'],
  providers: [NotificationService]
})
export class AddressListComponent implements OnInit {
  addresses: AddressEntry[] = [];
  currentAddress: AddressEntry | null = null;
  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  select(address: AddressEntry): void {
    this.currentAddress = address;
    this.notificationService.selectionChanged(address);
  }

  addAddress(): void {
    const newAddress = new AddressEntry('New', 'Entry');
    this.addresses = [newAddress, ...this.addresses];
    this.select(newAddress);
  }

  deleteCurrent(): void {
    this.addresses = this.addresses.filter((address: AddressEntry) => address !== this.currentAddress);
    this.currentAddress = null;
  }
}
