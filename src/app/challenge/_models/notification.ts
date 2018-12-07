export class Notification {
  type: NotificationType;
  title: string;
  message: string;
  alertId: string;
  keepAfterRouteChange: boolean;

  constructor(init?:Partial<Notification>) {
      Object.assign(this, init);
  }
}

export enum NotificationType {
  Success,
  Error,
  Info,
  Warning
}
