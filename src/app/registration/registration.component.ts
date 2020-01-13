import { Component, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../_services/user.service';

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  Roles: any = ["Admin", "Author", "Reader"];
  constructor(
    private router: Router,
    private userService: UserService,
    private toaster: MatSnackBar
  ) {}

  ngOnInit() {}
  register(regForm: NgForm) {
    console.log("form value==",regForm.form.value)
    this.userService.register(regForm.form.value)
    .subscribe((data)=>{
      console.log('success data ',data)
      this.toaster.open("Registered !",'Success',{
        duration:2000,
      }) 
      this.router.navigate(['/login']);
    },(error)=>{
      console.log("errorr data ",error)
      this.toaster.open("Error",'Some Server Error ! ',{
        duration:2000,
      }) 
    })
  }
  // getErrorMessage(form: NgForm) {
  //   console.log(form)
  // //   return form.hasError("required")
  // //     ? "You must enter a value"
  // //     : this.form.hasError("email")
  // //     ? "Not a valid email"
  // //     : "";
  // }
}
