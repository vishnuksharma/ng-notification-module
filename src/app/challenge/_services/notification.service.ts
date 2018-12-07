import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import 'rxjs/operators';

import { Notification, NotificationType } from '../_models/notification';

@Injectable()
export class NotificationService {
    private subject = new Subject<Notification>();
    private keepAfterRouteChange = false;

    constructor(private router: Router) {
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                } else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }

    // subscribe to alerts
    getAlert(alertId?: string): Observable<any> {
      // this.subject.asObservable().filter((x: Notification) => x && x.alertId === alertId);
        return this.subject.asObservable();
    }

    // convenience methods
    success(title: string, message: string) {
        this.alert(new Notification({title, message, type: NotificationType.Success }));
    }

    error(title: string, message: string) {
        this.alert(new Notification({ title, message, type: NotificationType.Error }));
    }

    info(title: string, message: string) {
        this.alert(new Notification({title, message, type: NotificationType.Info }));
    }

    warn(title: string, message: string) {
        this.alert(new Notification({title, message, type: NotificationType.Warning }));
    }

    // main alert method
    alert(alert: Notification) {
        this.keepAfterRouteChange = alert.keepAfterRouteChange;
        this.subject.next(alert);
    }

    // clear alerts
    clear(alertId?: string) {
        this.subject.next(new Notification({ alertId }));
    }
}
