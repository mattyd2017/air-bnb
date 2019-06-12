import { Router } from '@angular/router';
import { AuthService } from './../../auth/shared/auth.service';
import { Component } from '@angular/core';



@Component({
    selector: 'app-air-bnb-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(public auth: AuthService, private router: Router) {}

    logout() {
        this.auth.logout();
        this.router.navigate(['/login']);
    }

}
