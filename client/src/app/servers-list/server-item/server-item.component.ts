import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {Server} from '../../shared/interfaces';

@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.scss']
})
export class ServerItemComponent implements OnInit {
  @Input() server: Server = {} as Server;
  private path: string = '../../assets/icons';

  constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer

  ) {
    this.matIconRegistry
      .addSvgIcon('online-icon', this.setPath(`${this.path}/dot.svg`))
      .addSvgIcon('offline-icon', this.setPath(`${this.path}/x.svg`));
  }

  ngOnInit(): void {
  }

  iconSwitcher() {
    switch (this.server.serverStatus) {
    case 'online':
      return 'online-icon';

    case 'offline':
      return 'offline-icon';

    default:
      return '';
    }
  }

  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
