import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private protocol: string;
  private port: string = '50409'; //'44302';
  private basePath = 'localhost';

  private isSslOn: boolean = false;

  public get serverUrl(): string {
    return `${this.protocol}://${this.basePath}:${this.port}`;
  }

  public get webApiUrl(): string {
    return `${this.serverUrl}/api`;
  }

  constructor() {
    if (environment.production) {
      this.basePath = 'some-production-domain';
    } else {
      this.basePath = 'localhost';
    }

    if (this.isSslOn) {
      this.protocol = 'https';
    } else {
      this.protocol = 'http';
    }
  }
}
