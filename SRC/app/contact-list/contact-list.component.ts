import {Contact} from '../models/contact';
import { Component, OnInit } from '@angular/core'; 
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
value: any;
  constructor() {  
    this.setMarkContactStyle(); 
    this.createContact(); 
  } 
  isMarked = true; 
  isFriendContact = true; 
  isFamilyContact = false; 
  isWorkContact = true; 
 
  markContactStyle: Record<string, string> = {}; 
setMarkContactStyle() { 
this.markContactStyle = { 
'font-style': this.isFriendContact ? 'italic' : 'normal', 
'font-weight': !this.isFamilyContact ? 'bold' : 'normal', 
'font-size': this.isWorkContact ? '24 px' : '12px'  
} 

  } 
  ngOnInit(): void {
  }
  deleteContact():void{
  
  if(confirm("Voulez-vous supprimer le contact")){
    alert("work")
  }
  else{
alert("annuler")
  }
  }
  editContact():void{
    
    if(confirm("voulez-vous ajouter le contact")){
      alert("work")
    }
    else{
  alert("annuler")
    }
  }
  listContacts: Array<Contact> = new Array<Contact>(); 
  createContact() { 
    this.listContacts.push({type:"Work",firstName:"kn  ",lastName:"fadi",email:"fadi.ham@gmail.com",description:"Travail",phone:"24420508"});
    this.listContacts.push({type:"Work",firstName:"jb  ",lastName:"chaima",email:"chaima2003@gmail.com",description:"Travail",phone:"98 225 145"});
    this.listContacts.push({type:"Family",firstName:"mn  ",lastName:"aymen",email:"aymen2006@gmail.com",description:"Famille",phone:"25 879 314"});
    this.listContacts.push({type:"Family",firstName:"hm  ",lastName:"hamdi",email:"hamdi2003@gmail.com",description:"Famille",phone:"54 763 114"});
    this.listContacts.push({type:"Friend",firstName:"kn ",lastName:"adel",email:"adeli22@gmail.com",description:"Amis",phone:"25 489 632"});
    this.listContacts.push({type:"Friend",firstName:"ch ",lastName:"amine",email:"amine0051@gmail.com",description:"Amis",phone:"22 445 882"});
  } 
}