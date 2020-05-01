import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(private http:HttpClient) { }
  public  displayMovies(){
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.http.get<Movie[]>("http://localhost:1111/movie/display_movies");
} 
}
 export class Movie{
  private movie_Id:string ;
	private  movie_Name:string ;
  private genre:string ;
  private  director:string ;
  constructor(movie_Id:string , movie_Name:string ,genre:string ,director:string ){
    this.movie_Id;
    this.movie_Name;
    this.genre;
    this.director;
  }
  }
  
    
