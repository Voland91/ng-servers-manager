import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Server } from '../shared/interfaces';

@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.scss']
})

export class ServersListComponent implements OnInit {
  servers: Server[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchServers();
  }

  private fetchServers() {
    this.http.get<Server[]>('http://localhost:4454/servers')
      .subscribe(servers => this.servers = servers);
  }
}
