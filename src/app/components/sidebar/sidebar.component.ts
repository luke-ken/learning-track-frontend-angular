import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  localeDateString: string;
  currentLocaleDateString: string;
  currentLocaleDateStringInVietnam: string;
  currentISODateString: string;

  constructor() { }

  ngOnInit(): void {
    const date = new Date(Date.UTC(2012, 0, 12, 3, 0, 0));
    this.localeDateString = date.toLocaleString('de-DE', {timeZone: 'Asia/Saigon'});

    const currentDate = new Date();
    this.currentLocaleDateString = currentDate.toLocaleString('de-DE');
    this.currentLocaleDateStringInVietnam = currentDate.toLocaleString('de-DE', {timeZone: 'Asia/Saigon'});
    this.currentISODateString = currentDate.toISOString();

    console.log(new Date(this.currentISODateString));
  }

}
