import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, NavigationStart } from '@angular/router';

import { HomeComponent } from './home.component';
import { NotificationService } from '../_services/index';
import { Subscription } from 'rxjs';

export abstract class AbstractMockObservableService {
  protected _subscription: Subscription;
  protected _fakeContent: any;
  protected _fakeError: any;

  set error(err) {
    this._fakeError = err;
  }

  set content(data) {
    this._fakeContent = data;
  }

  get subscription(): Subscription {
    return this._subscription;
  }

  subscribe(next: Function, error?: Function, complete?: Function): Subscription {
    this._subscription = new Subscription();
    spyOn(this._subscription, 'unsubscribe');

    if (next && this._fakeContent && !this._fakeError) {
      next(this._fakeContent);
    }
    if (error && this._fakeError) {
      error(this._fakeError);
    }
    if (complete) {
      complete();
    }
    return this._subscription;
  }
}

class MockService extends AbstractMockObservableService {
  doStuff() {
    return this;
  }
}
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  // let mockRouter = {
  //   subscribe: () => {},
  //   navigate: jasmine.createSpy('navigate')
  // }
 let mockService;
  beforeEach(async(() => {
    mockService = new MockService()
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [{provide: NotificationService, useValue: mockService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create home component', () => {
    expect(component).toBeTruthy();
  });

  it('should have showNotification()', () => {
    expect(component.showNotification).toBeTruthy();
  });

  it('should have notification title input', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.form-control').attributes.name.value).toContain('title');
  });

  it('should have notification type input/redio', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.form-check-input').attributes.name.value).toContain('typeradio');
  });

  it('should have notification message input', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.desc').attributes.name.value).toContain('message');
  });

  it('should render button with "Show Notification" ', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.btn-success').textContent).toContain('Show Notification');
  });

  it('should render cancel button with "Clear" ', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.btn-default').textContent).toContain('Clear');
  });


});
