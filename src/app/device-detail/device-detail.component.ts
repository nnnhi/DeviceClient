import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoadingService } from '../services/loading.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {

  device: any;

  constructor(private api: ApiService, public loading: LoadingService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.params
      .subscribe(
        (params: Params) => {
          this.api
            .getDevice$(params['id'])
            .subscribe({
              next: data => {
                this.device = data
              },
              error: error => {
                alert('There was an error!');
              }
            })
        }
      );
  }
}

