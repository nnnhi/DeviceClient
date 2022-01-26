import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { ApiService, Device } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class FakeApiService implements ApiService {
  constructor(private http: HttpClient) {}

  getDevices$() {
    return this.http.get<Device[]>('../assets/data/devices.json');
  }

  getDevice$(id) {
    return this.http.get<any>(`${environment.apiUrl}/api/Devices/${id}`);
  }
}