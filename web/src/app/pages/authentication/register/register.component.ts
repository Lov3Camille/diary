import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../../../services/user.service";
import { User } from "../../../modules/user";
import * as _ from "lodash";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
})
export class AppSideRegisterComponent {
    form = new FormGroup({
        uname: new FormControl("", [
            Validators.required,
            Validators.minLength(6),
        ]),
        email: new FormControl("", [Validators.required]),
        password: new FormControl("", [Validators.required]),
    });
    public existingUsers: User[];
    public name: string;
    public password: string;
    public mail: string;
    public existing: boolean = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private messageService: ToastrService,
    ) {}

    get f() {
        return this.form.controls;
    }

    submit() {
        this.router.navigate(["/dashboard"]);
    }

    signUp($event: MouseEvent) {
        $event.preventDefault();
        const newUser: User = {
            name: this.name,
            password: this.password,
            mail: this.mail,
        };
        this.userService.getAllUsers().subscribe({
            next: (res: User[]) => {
                this.existingUsers = res;
                _.forEach(this.existingUsers, (user: User) => {
                    if (
                        newUser.name === user.name ||
                        newUser.mail === user.mail ||
                        newUser.password === user.password
                    ) {
                        this.existing = true;
                    }
                });
                if (this.existing) {
                    this.messageService.error("User already exists!");
                    return;
                } else {
                    this.userService.registerUser(newUser).subscribe({
                        next: (res: User) => {
                            this.messageService.success(
                                `User: ${res.name} is registered successfully!`,
                            );
                            this.submit();
                        },
                    });
                }
            },
            error: (err) => {
                console.log(err);
            },
        });
    }
}
