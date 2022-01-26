import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HomeComponent } from './home.component';
import { ApiService } from '../services/api.service';
import { FakeApiService } from '../services/api.fake-service';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import * as Rx from 'rxjs';
import { delay } from 'rxjs/operators';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, SearchBarComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ApiService, useClass: FakeApiService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render expected devices', fakeAsync(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(ApiService);
    let spy_getPosts = spyOn(service, "getDevices$").and.callFake(() => {
      return Rx.of([{
        "id": 1,
        "name": "Device 1",
        "type": 0,
        "status": "Available",
        "temperature": 10.0,
        "dataUsage": "123, 234, 343"
      }, {
        "id": 2,
        "name": "Device 2",
        "type": 1,
        "status": "Offline",
        "temperature": 0,
        "dataUsage": "123, 234, 343"
      }]).pipe(delay(50));
    });
    component.ngOnInit();
    tick(100);
    expect(component.devices.length).toBe(2);
  }));
});
