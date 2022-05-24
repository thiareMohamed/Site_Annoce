import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import axios from "axios";
import {HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajout-annnonce',
  templateUrl: './ajout-annnonce.component.html',
  styleUrls: ['./ajout-annnonce.component.css']
})
export class AjoutAnnnonceComponent implements OnInit {

  data = new Object();

  userForm = new FormGroup({
    titre : new FormControl(null, Validators.required),
    prix : new FormControl(null, Validators.required),
    image : new FormControl(null, Validators.required),
    telephone : new FormControl(null, Validators.required),
    categorie_id : new FormControl(null, Validators.required),
    description : new FormControl(null, Validators.required)
  })

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  showForm() {
    this.data = this.userForm["value"]
    console.log(this.data);
    axios.post("http://localhost:8080/annonce/create", this.data, {
        headers: {
        'Authorization': 'application/json',
          'Content-Type': 'application/json',
      },
      data: '',
    }).then(res =>{
      this.router.navigate([`/detail/${res.data["id"]}`])
    })
  }


}
