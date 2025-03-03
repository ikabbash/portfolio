import React from "react";
import dayjs from "dayjs";

function Card({ url, image_url, date, title }) {
  return (
    <article className="max-w-sm w-full mx-auto bg-card shadow-md rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          src={image_url}
          alt="Blog Cover"
          className="w-full h-52 object-cover"
        />
        <div className="p-4">
          <h5 className="text-lg font-semibold text-text1 line-clamp-2">
            {title}
          </h5>
          <div className="mt-2 text-right">
            <span className="text-sm text-text2">
              {dayjs(date).format("MM/DD/YYYY")}
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}

export default Card;
