import { Component, OnInit } from '@angular/core';
import { FmrteService } from '../../service/fmrte.service';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  keyword = '';
  username = '';
  password = '';

  constructor(private fmrteService: FmrteService, private router: Router) { }

  ngOnInit() {
    sessionStorage.removeItem('access_token');
  }

  doLogin() {
    const user: User = new User();
    user.username = this.username;
    user.password = this.password;
    this.fmrteService.login(user).subscribe(response => {
      sessionStorage.setItem('access_token', response.headers.get('Authorization'));
      this.router.navigate(['/video/list']);
    }, error => {
      alert('로그인에 실패했습니다.');
    });
  }

  regist() {
    this.router.navigate(['/user/regist']);
  }



}
