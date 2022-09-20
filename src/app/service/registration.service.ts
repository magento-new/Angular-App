import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, ReplaySubject, Subject } from "rxjs";
import { RegistrationModel } from "../model/registration.model";
@Injectable({
    providedIn: 'root'
})

export class RegistrationService {
    mockUserList: Array<RegistrationModel> = [
        {
            firstname: '',
            lastname: 'S',
            email: 'abinaya@gmail.com',
            password: '123456',
            confirmPassword: '123456',
            username: 'Abinaya',
            userType: 'admin'
        },
        {
            firstname: 'Aravind',
            lastname: 'Kumar',
            email: 'aravind@gmail.com',
            password: '456789',
            confirmPassword: '456789',
            username: 'Aravind',
            userType: 'admin'
        },
        {
            firstname: 'Karthik',
            lastname: 'A',
            email: 'k@mail.com',
            password: '123456',
            confirmPassword: '123456',
            username: 'k',
            userType: 'admin'
        },
        {
            firstname: 'Employee',
            lastname: 'e',
            email: 'e@mail.com',
            password: '123456',
            confirmPassword: '123456',
            username: 'e',
            userType: 'employee'
        },

    ]
    resgisterSubject = new BehaviorSubject<RegistrationModel[]>(this.mockUserList);

    registerUser(data:any) {
        // return this.resgisterSubject.next(data);
        this.mockUserList.push(data);
    }

    addToLoginList(data: any) {
        this.mockUserList.push(data);
    }

}