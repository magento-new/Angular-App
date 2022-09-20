import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from './service/login.service';
import { NotificationService } from './service/notification.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
    title = 'angular-app';
    openPanel = false;
    isBatchdisabled: Boolean = false;
    badgeCount: number = 0;
    getbatchValue: Subscription;
    isloginbtnVisible: Boolean = true;
    // showAllDetails: Boolean = false;
    constructor(private notificationservice: NotificationService,
        private route: Router,
        private loginService: LoginService) { }

    ngOnInit(): void {
        this.getbatchValue = this.notificationservice.incrementSubject.subscribe((count: number) => {
            this.badgeCount = count;
        });
        console.log("batchvalue", this.getbatchValue);
    }
    ngDoCheck(): void {
        this.openPanel = !this.openPanel
        if (this.route.url == '/login' || this.route.url == '/registration') {
            this.isloginbtnVisible = true;
        } else
            this.isloginbtnVisible = false;
    }

    toggle() {
        if (this.route.url == '/login') {
            alert("Login (or) signup to access the app");
        }
        else
            this.openPanel = !this.openPanel

    }
    openModal() {
        alert("Welcome to Dashboard..!!");
        this.notificationservice.incrementBadgeValue(this.badgeCount - 1);
        this.getbatchValue = this.notificationservice.incrementSubject.subscribe((count: number) => {
            this.badgeCount = count;
            if (this.badgeCount == 0) {
                this.isBatchdisabled = true;
            }
            else {
                this.isBatchdisabled = false;
            }
        });

    }

    goToLogin() {
        this.loginService.getUserType('');
        this.loginService.getEmployeeName('');
        this.route.navigate(['/login']);
    }
    goToLogout() {
        this.loginService.getUserType('');
        this.loginService.getEmployeeName('');
        this.route.navigate(['/login']);
    }
}
