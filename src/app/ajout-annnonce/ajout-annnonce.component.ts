import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-ajout-annnonce',
  templateUrl: './ajout-annnonce.component.html',
  styleUrls: ['./ajout-annnonce.component.css']
})
export class AjoutAnnnonceComponent implements OnInit {


  userForm = new FormGroup({
    titre : new FormControl(),
    prix : new FormControl(),
    image : new FormControl(),
    telephone : new FormControl(),
    categorie_id : new FormControl(),
    description : new FormControl()

  })

  constructor() { }

  ngOnInit(): void {
  }

  showForm() {
    console.log(this.userForm);
  }


}
