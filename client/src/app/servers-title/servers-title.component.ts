import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-servers-title',
  templateUrl: './servers-title.component.html',
  styleUrls: ['./servers-title.component.scss']
})
export class ServersTitleComponent implements OnInit {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'search-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/search.svg')
    );
  }

  ngOnInit(): void {
  }

}
