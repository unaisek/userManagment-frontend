import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent  implements OnInit {
  message :string =''

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/admin/active',{
      withCredentials:true
    }).subscribe((res:any)=>{
      console.log("emitted true");
      
      Emitters.authEmitter.emit(true)
    },
    (err)=>{
      console.log("emitted false");
      
      Emitters.authEmitter.emit(false)
    }
    )
  }
}
