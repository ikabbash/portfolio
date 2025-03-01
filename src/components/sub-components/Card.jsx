import React from "react";
import dayjs from "dayjs";

function Card({ url, image_url, date, title, tags }) {
  return (
    <>
      <article className="max-w-md mx-auto mt-6 shadow-lg border rounded-md duration-300 hover:shadow-sm bg-card hover:bg-background">
        <a href={url} target="_blank">
          <img
            src={image_url}
            alt={"Image"}
            className="w-full h-48 rounded-t-md object-cover"
          />
          <div className="pt-3 ml-4 mr-2 mb-3">
            <h5 className="text-l text-text1 font-semibold line-clamp-2">{title}</h5>
            {/* Hashtags */}
            {/* <div className="text-sm mt-2 text-text3">
              {tags.map((tag) => {
                return (
                  <p
                    key={tag}
                    className="inline-flex mt-1 text-xs items-center font-bold uppercase px-3 py-1 rounded-lg bg-white text-gray-800 border mr-2"
                  >
                    #{tag}
                  </p>
                );
              })}
            </div> */}
            <div className="mt-4 text-right">
            <span className="text-sm text-text2">
              {dayjs(date).format("MM/DD/YYYY")}
            </span>
          </div>
          </div>
        </a>
      </article>
    </>
  );
}

export default Card;
