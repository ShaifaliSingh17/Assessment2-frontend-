import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Person } from '../person';
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private person:Person;
  private headers=new HttpHeaders().set('Content-Type','application/json')
  constructor(private http:HttpClient) { }
  
  createPerson(person:Person){
    return this.http.post('http://localhost:8080/create',person,{headers:this.headers});
  }

  readPerson(){
    return this.http.get('http://localhost:8080/read',{headers:this.headers});
  }

  updatePerson(person:Person){
    return this.http.put('http://localhost:8080/update',person,{headers:this.headers});
  }

  deletePerson(id:string){
    return this.http.delete('http://localhost:8080/delete/'+id,{headers:this.headers});
  }
  setter(person:Person){
    this.person=person;
  }
  getter(){
    return this.person;
  }
}
