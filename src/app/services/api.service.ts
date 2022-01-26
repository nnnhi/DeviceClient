import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Device {
    id: number;
    name: string,
    status: string,
    type: number,
    dataUsage: string
}

@Injectable()
export abstract class ApiService {
    abstract getDevices$(): Observable<Device[]>;
    abstract getDevice$(id):Observable<any>;
}