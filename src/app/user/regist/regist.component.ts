import { Component, OnInit } from '@angular/core';
import { FmrteService } from '../../service/fmrte.service';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html'
})
export class RegistComponent implements OnInit {
  user: User = new User();

  constructor(private fmrteService: FmrteService, private router: Router) { }

  ngOnInit() {
  }

  regist() {
    this.fmrteService.regist(this.user).subscribe(response => {
      alert('회원가입이 완료되었습니다.');
      this.router.navigate(['/user/login']);
    }, error => {
      alert('회원가입 중 오류가 발생했습니다.');
    });
  }



}
