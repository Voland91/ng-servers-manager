import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-server-menu',
  templateUrl: './server-menu.component.html',
  styleUrls: ['./server-menu.component.scss']
})
export class ServerMenuComponent implements OnInit {

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
  }

}
