import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../modules/user";

const baseUrl = "http://localhost:4300/api/user";

@Injectable({
    providedIn: "root",
})
export class UserService {
    constructor(private http: HttpClient) {}

    getAllUsers() {
        return this.http.get<User[]>(`${baseUrl}/`);
    }

    registerUser(user: User) {
        return this.http.post<User>(`${baseUrl}/register`, user);
    }

    loginUser(userName: string, password: string) {
        return this.http.post<User>(`${baseUrl}/login`, null, {
            params: {
                userName: userName,
                password: password,
            },
        });
    }
}
