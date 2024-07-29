import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit {
  user: User[] = [];
  search=""
  constructor(private userService : UserService) {}
  ngOnInit(): void {
this.getutilisateurs()  }

getutilisateurs() {
    this.userService.getutilisateurs(this.search).subscribe({
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
