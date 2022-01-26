import { Component, OnInit } from '@angular/core';
import { RealApiService } from '../services/api.real-service';
import { ApiService } from '../services/api.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  devices: any[] = [];
  filteredDevices: any[] = [];

  constructor(private api: ApiService, public loading: LoadingService) { }

  ngOnInit(): void {
    this.loading.add();
    this.api
      .getDevices$()
      .subscribe({
        next: data => {
          this.devices = data;
          this.filteredDevices = data;
          this.loading.remove();
        },
        error: error => {
          this.loading.remove();
          alert('There was an error!');
        }
      })
  }

  search(term) {
    this.filteredDevices = this.devices.filter(function (item) {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }
}
