import { Component, OnInit, Input } from '@angular/core';

import { Notification, NotificationType } from '../_models/index';
import { NotificationService } from '../_services/index';

@Component({
    // moduleId: module.id,
    selector: 'app-notification',
    templateUrl: 'notification.component.html',
    styleUrls: ['./notification.component.scss']
})

/**
 * @class NotificationComponent : Notifying to user as notification toaster
 * @param {none}
 * @return {undefined}
 */
export class NotificationComponent {
    @Input() id: string;

    alerts: Notification[] = [];

    constructor(private alertService: NotificationService) { }

    ngOnInit() {
        this.alertService.getAlert(this.id).subscribe((alert: Notification) => {
            if (!alert.message) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }

            // add alert to array
            this.alerts.push(alert);
        });
    }

    removeAlert(alert: Notification) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }

    cssClass(alert: Notification) {
        if (!alert) {
            return;
        }

        // return css class based on alert type
        switch (alert.type) {
            case NotificationType.Success:
                return 'toast-success';
            case NotificationType.Error:
                return 'toast-error';
            case NotificationType.Info:
                return 'toast-info';
            case NotificationType.Warning:
                return 'toast-warning';
        }
    }
}
