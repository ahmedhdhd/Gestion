import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  user: User[] = [];
  search=""
  constructor(private userService : UserService) {}
  ngOnInit(): void {
this.getclients()  }

getclients() {
    this.userService.getclients(this.search).subscribe({
      next: response => {
        this.user = response;
      },
      error: error => console.log(error)
    })
  }
  deleteutilisateurs(id : number){
this.userService.deleteuser(id).subscribe({
  next :() => { 
    this.ngOnInit() 
  } ,

  error: error => console.log(error)


})
  }
}
