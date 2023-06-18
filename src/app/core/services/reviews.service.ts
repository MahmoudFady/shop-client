import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReview } from '../shared/models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private baseUrl = 'http://localhost:8080';
  constructor(private http:HttpClient) { }

  addReview(id:string, review:IReview):Observable<any>{
    return this.http.post(`${this.baseUrl}/product/${id}/reviews`,review)
  }

  getReviews(id:string):Observable<IReview[]>{
    return this.http.get<IReview[]>(`${this.baseUrl}/product/${id}/reviews`);
  }


}
