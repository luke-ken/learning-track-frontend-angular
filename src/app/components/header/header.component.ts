import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoginUrl: boolean;

  constructor(private authService: AuthenticationService, private router: Router, private location: Location) {
    location.onUrlChange((url) => {
      this.isLoginUrl = (url === '/login');
    });
  }

  ngOnInit(): void {
  }

  onLogOut(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
