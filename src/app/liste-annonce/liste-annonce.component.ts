import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import axios from "axios";

@Component({
  selector: 'app-liste-annonce',
  templateUrl: './liste-annonce.component.html',
  styleUrls: ['./liste-annonce.component.css']
})
export class ListeAnnonceComponent implements OnInit {

  donnees = []

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    // this.http.request('GET', this.urlApi, {responseType:'json'}).subscribe(
    //   (data) => console.log(data)
    // );
    axios.get("http://localhost:8080/annonce/").then((res) => this.donnees = res.data)

  }
}
