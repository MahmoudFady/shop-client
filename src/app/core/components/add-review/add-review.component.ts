import { Component,Output,EventEmitter } from '@angular/core';
import { IReview } from '../../shared/models/review.model';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent {
  @Output() reviewAdded = new EventEmitter<IReview>();

  rating:number = 0;
  comment:string='';
  constructor(private authService:AuthService){}
  submitReview(){
    const review:IReview = {
      user: {
        _id: '1',
        image: 'https://example.com/user1.jpg',
        name: 'John Doe'
        },
        rating: this.rating,
        comment: this.comment
    }
    this.reviewAdded.emit(review);
    this.rating = 0;
    this.comment = '';
  }
}

