import { Component, OnInit } from '@angular/core';
import { DisplayService, Movie } from '../display.service';

@Component({
  selector: 'app-display-movies',
  templateUrl: './display-movies.component.html',
  styleUrls: ['./display-movies.component.css']
})
export class DisplayMoviesComponent implements OnInit {

  constructor(private displayservice: DisplayService) { }
  result:Movie[];

  ngOnInit(): void {
  }

displayMovies():void{
  this.displayservice.displayMovies().subscribe(
    data=>{this.result=data})
}


}
