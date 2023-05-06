import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./sub-components/Card";
import { SiDevdotto, SiHashnode } from "react-icons/si"

export default function () {
  const [devArticles, setDevArticles] = useState([]);
  const [hashArticles, setHashArticles] = useState([]);

  // fetch
  const getDevDotTo = async () => {
    const { data } = await axios.get(
      "https://dev.to/api/articles?username=hat52"
    );
    setDevArticles(data.slice(0, 3));
  };

  // fetch
  const getHashnode = async () => {
    // note: slug is the part of the URL
    const query = `
        {
        user(username: "misiochaabel") {
            publication {
                posts(page: 0) {
                    title
                    brief
                    coverImage
                    dateAdded
                    slug
                }
            }
            }
        }`;
    const response = await fetch("https://api.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const { data } = await response.json();
    setHashArticles(data.user.publication.posts);
  };

  useEffect(() => {
    getDevDotTo();
    getHashnode();
  }, []);

  // console.log(hashArticles)

  return (
    <>
      {/* reference: https://www.floatui.com/components/cards */}
      <section className="mx-auto px-6 max-w-screen-xl mb-[500px] scroll-mt-20" id="blog">
        <h1 className="text-center text-3xl mt-40 font-bold"><span>11. </span>Latest Blog Posts</h1>
        <div className="mt-4 grid gap-3 lg:grid-cols-3 sm:grid-cols-1">
        {/* <div className="flex flex-col"> */}
          {devArticles.map((key) => {
            return (
              <Card
                key={key.url}
                url={key.url}
                title={key.title}
                image_url={key.cover_image}
                date={key.created_at}
                tags={key.tag_list}
              />
            );
            // in case wanted to use Hashnode content
            // return (
            //   <Card
            //     key={key.slug}
            //     url={key.slug}
            //     title={key.title}
            //     image_url={key.coverImage}
            //     date={key.dateAdded}
            //     tags={key.brief}
            //   />
            // );
          })}
        </div>
        <div className="mt-10 text-4xl inline-flex">
          <span className="text-2xl py-1">See all articles →</span>
              <button className="ml-3 text-gray-800 rounded transition ease-in-out hover:text-red-700 py-1 px-2">
                <SiDevdotto />
              </button>
              <button className="ml-3 text-gray-800 rounded transition ease-in-out hover:text-red-700 py-1 px-2">
                <SiHashnode />
              </button>
            </div>
      </section>
    </>
  );
}
