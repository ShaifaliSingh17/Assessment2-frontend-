import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/shared/person.service';
import { Person } from '../../person';
@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {

  constructor(private personService:PersonService, private router:Router) { }
   person:Person;
  ngOnInit(): void {
   this.person=  this.personService.getter();
  }
  createOrUpdate(){
    if(this.person.name==undefined){
    this.personService.createPerson(this.person).subscribe(
      data=>{
        console.log(data);
        //this.personService.setter(this.person);
        this.router.navigate(['/']);
      },
      error=>{
        console.log(error);
      }
    )}
    else{
      this.personService.updatePerson(this.person).subscribe(
        data=>{
          console.log(data);
          //this.personService.setter(this.person);
          this.router.navigate(['/']);
        },
        error=>{
          console.log(error);
        }
      )
    }
  }

}
