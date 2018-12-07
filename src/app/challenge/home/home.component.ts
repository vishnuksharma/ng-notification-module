import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NotificationService } from '../_services/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

/**
 * @class {HomeComponent}
 */
export class HomeComponent implements OnInit {
  @ViewChild('notificationInput') notificationInput: ElementRef;
  constructor(private alertService: NotificationService) { }

  ngOnInit() {
  }

  /**
   *
   * @param e click event
   */
  showNotification(e) {
    e.preventDefault();
    const title = this.notificationInput.nativeElement.title.value || "Hello world!";
    const message = this.notificationInput.nativeElement.message.value || "notification fun!";
    const notiType = this.notificationInput.nativeElement.typeradio.value || 'success';

    switch (notiType) {
      case "success":
        this.alertService.success(title, message);
        break;
      case "info":
      this.alertService.info(title, message);
        break;
      case "warning":
      this.alertService.warn(title, message);
        break;
      case "error":
      this.alertService.error(title, message);
        break;
      default:
      this.alertService.success(title, message);
        break;
    }
  }

  /**
   *
   * @param e  click event
   */
  clear(e) {
    e.preventDefault();
    this.alertService.clear();
  }

}
