import { Component, OnInit } from '@angular/core';
import { Person } from '../../person';
import { PersonService } from 'src/app/shared/person.service';
//import { AnyARecord } from 'dns';
//import{Router}
import { Router } from '@angular/router';
//import {Person}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   persons :Person[];
   person :Person;
  
    constructor(private personServive:PersonService, private router:Router) { }

  ngOnInit(): void {
    this.readPersons();
  }
  //add
   newPerson(event:any){
      event.preventDefault();
      this.personServive.setter(new Person());
      this.router.navigate(['/createUpdate']);
   }
   //update
   doUpdate(person){
    this.personServive.setter(person);
    this.router.navigate(['/createUpdate']);

   }
   //delete
   doDelete(person){
    this.personServive.deletePerson(person._id).subscribe(
      data=>{
        console.log(data);
        this.persons.splice(this.persons.indexOf(person),1);
      },
      error=>{
        console.log(error);
      }
    )
   }


  readPersons(){
    this.personServive.readPerson().subscribe(
      data=>{
        console.log(data);
        this.persons=data['msg'];
      },
      error=>{
        console.log(error);

      }
    )

  }

}
