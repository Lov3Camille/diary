import { Component } from "@angular/core";
import { UserService } from "../../../services/user.service";
import { User } from "../../../modules/user";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
})
export class AppSideLoginComponent {
    public name: string;
    public password: string;

    constructor(
        private router: Router,
        private userService: UserService,
        private messageService: ToastrService,
    ) {}

    signIn($event: MouseEvent) {
        this.userService.loginUser(this.name, this.password).subscribe({
            next: (res: User) => {
                if (res != null) {
                    this.messageService.success("login successfully!");
                    this.router.navigate(["/"]);
                } else {
                    this.messageService.error("No user found!");
                    this.router.navigate(["authentication/register"]);
                }
            },
        });
    }
}
