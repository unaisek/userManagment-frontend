import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {
  authenticated:boolean = false;

  constructor(
    private http: HttpClient,
    private router:Router 
    ){}

  ngOnInit(): void {
    Emitters.authEmitter.subscribe((auth:boolean)=>{
      this.authenticated = auth;
      // console.log(auth,"asure");
      
    })
  }

  logout(): void {
    this.http.post('http://localhost:5000/api/admin/logout',{},{
      withCredentials:true
    }).subscribe(()=>{
      Emitters.authEmitter.emit(false)
      this.router.navigate(['/admin']);
      
    })
  }
}
