import { Component, Input, inject,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IProductDetails } from '../../shared/models/product-details.model';
import { ReviewsService } from '../../services/reviews.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id:string='';
  reviews:any[]=[];
  isLoggedIn:boolean = false;
  hasPurchased:boolean =false;
  @Input('product') product!: IProductDetails;
  displayImage(src: string) {
    this.product.thumbnail = src;
  }
  constructor(private route:ActivatedRoute,private reviewService:ReviewsService){}
  ngOnInit(): void {
      this.route.params.subscribe((params:any)=>{
        this.id = params.get("id");
      })
  }
  getReviews(){
    this.reviewService.getReviews(this.id).subscribe(reviews=>{
      this.reviews= reviews
    })
  }
  onReviewAdded(review: any) {
  // Check if user has purchased the product
  // You'll need to implement the logic to check this
  this.hasPurchased = true;

  if (this.isLoggedIn && this.hasPurchased) {
    this.reviewService.addReview(this.id, review).subscribe(() => {
      this.getReviews();
    });
  }
}
}
