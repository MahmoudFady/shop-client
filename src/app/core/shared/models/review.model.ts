export interface IReview {
  user: {
    _id: string;
    image: string;
    name: string;
  };
  rating: number;
  comment: string;
}
