import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit{

  constructor(private service:MovieApiServiceService, private router: ActivatedRoute){
  }

  getMovieDetailResult: any;
 
  getMovieCastResult: any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'getParemid#')

    this.getMovie(getParamId);
    this.getMovieCast(getParamId);
  }

  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((result) => {
      console.log(result, "getmoviedetails#");
      this.getMovieDetailResult = result;
    })

  }


  getMovieCast(id:any){
    this.service.getMovieCast(id).subscribe((result)=> {
      console.log(result,"cast#");
      this.getMovieCastResult = result.cast;
    })
  }

}
