import React, { useState } from "react";
interface ReadMoreProps {
  children: any;
  count?: number;
}
export const ReadMore: React.FC<ReadMoreProps> = ({ children, count }) => {
  const paragraph = children;
  const [isReadMore, setIsReadMore] = useState(true);
  return (
    <span className="text">
      {isReadMore ? paragraph?.substring(0, 75) : paragraph}
      {paragraph?.length > 300 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsReadMore(!isReadMore);
          }}
          className={`${
            isReadMore
              ? "text-xs  text-[#EB6625]"
              : " pl-2 text-xs text-gray-900 duration-200 hover:scale-110 "
          } ml-1 font-semibold`}
        >
          {isReadMore ? " ...Read more" : "  Show less"}
        </button>
      )}
    </span>
  );
};
