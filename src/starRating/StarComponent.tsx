import { Star } from "lucide-react";
import { useState } from "react";
function StarComponent({ numOfStars }: { numOfStars: number }) {
  const [rating, setRating] = useState(0);
  const [isHovered, setIsHovered] = useState<number>(0);

  console.log(isHovered, "hovered");
  console.log(rating, "rating");

  const handleSetRating = (id: number) => {
    setRating(id);
  };

  const handleHover = (id: number) => {
    setIsHovered(id);
  };

  const starArray = Array.from({ length: numOfStars }, (_, i) => i + 1);

  return (
    starArray.length &&
    starArray.map((item: number) => (
      <Star
        key={item}
        onMouseEnter={() => handleHover(item)}
        onMouseLeave={() => handleHover(0)}
        onClick={() => handleSetRating(item)}
        className={`${(isHovered || rating) >= item && "text-yellow-400"}`}
      />
    ))
  );
}
export default StarComponent;
