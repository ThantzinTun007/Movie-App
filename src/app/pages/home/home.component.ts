import { Component,OnInit } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private service: MovieApiServiceService){}

  bannerResult:any = [];
  trendingMovieResult:any = [];
  actionMovieResult:any = [];
  adventureMovieResult:any = [];
  animationMovieResult:any = [];
  comedyMovieResult:any = [];
  documentaryMovieResult:any = [];
  scienceMovieResult:any = [];
  thrillerMovieResult:any = [];
  topMovieResult:any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovieData();
    this.adventureMovieData();
    this.animationMovieData();
    this.comedyMovieData();
    this.documentaryMovieData();
    this.scienceMovieData();
    this.thrillerMovieData()
    this.topMovieData();
  }

  //bannerData
  bannerData(){
    this.service.banneraApiData().subscribe((result) => {
      console.log(result, 'bunnerresult#');
      this.bannerResult = result.results;
    })
  }

  //trendingMovie
  trendingData(){
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
    })
  }


  topMovieData(){
    this.service.getTopMovies().subscribe((result)=>{
      console.log(result,'topMovie#');
      this.topMovieResult = result.results;
    })
  }

  
  actionMovieData(){
    this.service.fetchActionMovies().subscribe((result)=>{
      console.log(result,'action#');
      this.actionMovieResult = result.results;
    })
  }



  adventureMovieData(){
    this.service.fetchAdvantureMovies().subscribe((result)=>{
      console.log(result,'adventure#');
      this.adventureMovieResult = result.results;
    })
  }



  animationMovieData(){
    this.service.fetchAnimationMovies().subscribe((result)=>{
      console.log(result,'animation#');
      this.animationMovieResult = result.results;
    })
  }



  comedyMovieData(){
    this.service.fetchComedyMovies().subscribe((result)=>{
      console.log(result,'comedy#');
      this.comedyMovieResult = result.results;
    })
  }



  documentaryMovieData(){
    this.service.fetchDocumentaryMovies().subscribe((result)=>{
      console.log(result,'documentary#');
      this.documentaryMovieResult = result.results;
    })
  }



  scienceMovieData(){
    this.service.fetchScienceMovies().subscribe((result)=>{
      console.log(result,'science#');
      this.scienceMovieResult = result.results;
    })
  }



  thrillerMovieData(){
    this.service.fetchThrillernMovies().subscribe((result)=>{
      console.log(result,'thriller#');
      this.thrillerMovieResult = result.results;
    })
  }

}
