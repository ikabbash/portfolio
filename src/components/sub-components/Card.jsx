import React from "react";
import dayjs from "dayjs";

function Card({ url, image_url, date, title, tags }) {
  return (
    <>
      <article className="max-w-md mx-auto mt-6 shadow-lg border rounded-md duration-300 hover:shadow-sm bg-card">
        <a href={url} target="_blank">
          <img
            src={image_url}
            alt={"Image"}
            className="w-full h-48 rounded-t-md object-cover"
          />
          <div className="pt-3 ml-4 mr-2 mb-3">
            <h3 className="text-xl text-text1">{title}</h3>
            <p className="text-gray-400 text-sm mt-1 ml-1 text-text2">{dayjs(date).format("MM/DD/YYYY")}</p>
            <div className="text-sm mt-2 text-text3">
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
            </div>
          </div>
        </a>
      </article>
    </>
  );
}

export default Card;
