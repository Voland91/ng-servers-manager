import { Component, OnInit } from '@angular/core';
import { Server } from '../shared/interfaces';

@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.scss']
})

export class ServersListComponent implements OnInit {
  servers: Server[] = [
    {serverName: 'Serwer1', serverStatus: 'offline'},
    {serverName: 'Serwer2', serverStatus: 'online'},
    {serverName: 'Serwer3', serverStatus: 'rebooting'}
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
