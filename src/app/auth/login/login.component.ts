import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { AuthService } from 'app/services/auth/auth.service';
import { CryptoServiceLS } from 'app/utils/cryptojs/crypto.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('incorrectPass')
  public readonly incorrectPass!: SwalComponent;

  public loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private cryptUtil: CryptoServiceLS
  ) { }

  ngOnInit(): void {
  }

  startLogin(){
    this.authService.sendLogin().subscribe(
      ({ data }) => {
        if(this.processingLogin(data)){
          this.router.navigate(['/home']);
        };
      }
    )
  }

  processingLogin({status, access_token, userName}): boolean{
    if(status === 200 && access_token){
      this.cryptUtil.storeData('username', userName)
      this.cryptUtil.storeData('accessToken', access_token)
      return true;
    } else {
      this.incorrectPass.fire();
      return false;
    }
  }

  resetForm(){
    this.loginForm.reset();
  }
}
