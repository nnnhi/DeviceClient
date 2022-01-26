import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'device-icon',
  templateUrl: './device-icon.component.html',
  styleUrls: ['./device-icon.component.css']
})
export class DeviceIconComponent implements OnInit {
  @Input() type : number;

  constructor() { }

  ngOnInit(): void {
  }

}
