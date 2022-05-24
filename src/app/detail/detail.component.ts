import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import axios from "axios";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  donnee : any = []
  message = "Bonjour, je souhaite vous contacter pour plus d'information sur votre annonce."


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    axios.get("http://localhost:8080/annonce/" + id).then((res) => {
      this.donnee = res.data
    })
  }
}
