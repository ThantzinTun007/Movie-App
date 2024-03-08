import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  constructor(private http: HttpClient) {}

  baseurl = 'https://api.themoviedb.org/3';
  apikey = '9ec25800f578fd5da8d3ba63685f16f0';

  banneraApiData(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/trending/all/week?api_key=${this.apikey}`
    );
  }

  //trendingMovie

  trendingMovieApiData(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=9ec25800f578fd5da8d3ba63685f16f0`
    );
  }

  //topMovie
  getTopMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/movie/top_rated?api_key=${this.apikey}`
    );
  }

  //searchMovie
  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');
    return this.http.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apikey}&query=${data.movieName}`
    );
  }

  //movieDetail
  getMovieDetails(data: any): Observable<any> {
    return this.http.get(
      `${this.baseurl}/movie/${data}?api_key=${this.apikey}`
    );
  }

  getMovieCast(data: any): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${data}/credits?api_key=${this.apikey}`
    );
  }

  //actionMovies
  fetchActionMovies(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.apikey}&with_genres=28`
    );
  }

  //adventureMovies
  fetchAdvantureMovies(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.apikey}&with_genres=12`
    );
  }

  //animationMovies
  fetchAnimationMovies(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.apikey}&with_genres=16`
    );
  }

  //comedyMovies
  fetchComedyMovies(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.apikey}&with_genres=35`
    );
  }

  //documentaryMovies
  fetchDocumentaryMovies(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.apikey}&with_genres=99`
    );
  }

  //science
  fetchScienceMovies(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.apikey}&with_genres=878`
    );
  }

  //thriller
  fetchThrillernMovies(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.apikey}&with_genres=53`
    );
  }
}
