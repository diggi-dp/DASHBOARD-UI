import { MdStarOutline, MdOutlineStarPurple500 } from 'react-icons/md';

type review = {
  profileImage: string;
  customerName: string;
  rating: number;
  review: string;
};

const FeedbackCard = ({ review }: { review: review }) => {
  return (
    <div className="flex flex-col justify-start gap-2 p-2">
      <div className="flex items-center justify-start gap-3">
        <img src={review.profileImage} alt={review.customerName} className="h-8 w-8 rounded-full" />
        <p className="text-sm font-medium">{review.customerName}</p>
      </div>
      <div className="flex items-center justify-start gap-1">
        {[1, 2, 3, 4, 5].map((star, index) => {
          if (review.rating >= star) {
            return <MdOutlineStarPurple500 key={index} className="text-yellow-400" />;
          } else {
            return <MdStarOutline key={index} className="text-gray-300" />;
          }
        })}
      </div>
      <p className="text-sm text-gray-200">{review.review}</p>
      <hr className="my-2 border-gray-200" />
    </div>
  );
};

export default FeedbackCard;
