import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-deleteactormovies',
  templateUrl: './deleteactormovies.component.html',
  styleUrls: ['./deleteactormovies.component.css']
})
export class DeleteactormoviesComponent implements OnInit {

  private moviesDB: any[] = [];
  private actorsDB: any[] = [];
  constructor(private dbService: DatabaseService, private router: Router) { }


  //Get all Movies
  onGetMovies() {
    console.log("From on GetMovies");
    return this.dbService.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }
  //Delete Movies

  // deleteAllMovies():void{
   
  //   for(let i=0;i<this.moviesDB.length; i++){
  //     this.moviesDB.splice(i,1);
  //     i--;
  //   }

  // }

  onDeleteAllMovies() {
    this.dbService.deleteAllMovies().subscribe(result => {
      this.onGetMovies();
      this.router.navigate(["/listmovies"]);
    });
  }

  //Get all Actors
  onGetActors() {
    console.log("From on GetActors");
    return this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }

  //Delete Actors

  onDeleteAllActors() {
    this.dbService.deleteAllActors().subscribe(result => {
      this.onGetActors();
      this.router.navigate(["/listactors"]);
    });
  }

  ngOnInit() {

    this.onGetMovies();
    this.onGetActors();

  }

}
