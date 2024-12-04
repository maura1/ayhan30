import React from "react";

interface StarRatingProps {
  stars: number; // Define the type of stars as number
}

const StarRating: React.FC<StarRatingProps> = ({ stars }) => {
  const filledStars = Array.from({ length: stars }, (_, i) => i);
  const emptyStars = Array.from({ length: 5 - stars }, (_, i) => i);
  return (
    <>
      {filledStars.map((index) => (
        <span key={index} className="text-yellow-400">&#9733;</span>
      ))}
      {emptyStars.map((index) => (
        <span key={index} className="text-gray-300">&#9733;</span>
      ))}
    </>
  );
};

export default StarRating;
