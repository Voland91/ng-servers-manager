import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {Server} from '../../../shared/interfaces';

@Component({
  selector: 'app-server-menu',
  templateUrl: './server-menu.component.html',
  styleUrls: ['./server-menu.component.scss']
})
export class ServerMenuComponent implements OnInit {
    @Input() server: Server = {} as Server;
    options: string[] = [];

    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer

    ) {
      this.matIconRegistry.addSvgIcon(
        'menu-icon',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/dots.svg')
      );
    }

    ngOnInit(): void {
      this.setOptions();
    }

    setOptions() {
      switch (this.server.status) {
      case 'ONLINE':
        this.options = ['Turn off', 'Reboot'];
        break;

      case 'OFFLINE':
        this.options = ['Turn on'];
        break;
      }
    }
}
