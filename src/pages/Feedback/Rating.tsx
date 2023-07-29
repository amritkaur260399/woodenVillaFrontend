import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FiStar } from "react-icons/fi";

// import { rateStar } from "../../../store";

const Rating = () => {
  const [currentRating, setCurrentRating] = useState(1);
  const [hoveredRating, setHoveredRating] = useState(0);
  const rating = hoveredRating ? hoveredRating : currentRating;
  const handleMouseLeave = (e: any) => setHoveredRating(0);

  return (
    <div>
      <div>
        <div className=" flex h-10 w-fit text-[#612C13]">
          <div
            className=" h-10 text-[35px]"
            onClick={() => setCurrentRating(1)}
            onMouseEnter={() => setHoveredRating(1)}
            onMouseLeave={() => handleMouseLeave({})}
          >
            <div className="">
              {rating > 0 ? (
                <AiFillStar className="text-[#612C13]" />
              ) : (
                <FiStar />
              )}
            </div>
          </div>
          <div
            className=" h-10 text-[35px]"
            onClick={(e) => setCurrentRating(2)}
            onMouseEnter={(e) => setHoveredRating(2)}
            onMouseLeave={(e) => handleMouseLeave({})}
          >
            {rating > 1 ? <AiFillStar /> : <FiStar />}
          </div>
          <div
            className=" h-10 text-[35px]"
            onClick={(e) => setCurrentRating(3)}
            onMouseEnter={(e) => setHoveredRating(3)}
            onMouseLeave={(e) => handleMouseLeave({})}
          >
            {rating > 2 ? <AiFillStar /> : <FiStar />}
          </div>
          <div
            className=" h-10 text-[35px]"
            onClick={(e) => setCurrentRating(4)}
            onMouseEnter={(e) => setHoveredRating(4)}
            onMouseLeave={(e) => handleMouseLeave({})}
          >
            {rating > 3 ? <AiFillStar /> : <FiStar />}
          </div>
          <div
            className=" h-10 text-[35px]"
            onClick={(e) => setCurrentRating(5)}
            onMouseEnter={(e) => setHoveredRating(5)}
            onMouseLeave={(e) => handleMouseLeave({})}
          >
            {rating > 4 ? <AiFillStar /> : <FiStar />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
