import React, { useEffect, useState } from "react";
// import axios from "axios";
import Card from "./sub-components/Card";

export default function () {
  // const [devArticles, setDevArticles] = useState([]);
  const [hashArticles, setHashArticles] = useState([]);

  // fetch
  // const getDevDotTo = async () => {
  //   const { data } = await axios.get(
  //     "https://dev.to/api/articles?username=hat52"
  //   );
  //   setDevArticles(data.slice(0, 3));
  // };

  // fetch
  const getHashnode = async () => {
    // note: slug is the part of the URL
    const query = `
      query {
        publication(host: "ikabbash.hashnode.dev") {
          posts(first: 3) {
            edges {
              node {
                title
                slug
                coverImage {
                  url
                  }
                url
                publishedAt
              }
            }
          }
        }
      }`;
    const response = await fetch("https://gql.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const { data } = await response.json();
    setHashArticles(data.publication.posts.edges);
  };

  useEffect(() => {
    // getDevDotTo();
    getHashnode();
  }, []);

  // console.log(hashArticles?.[0]?.node);
  // console.log(hashArticles);

  return (
    <>
      {/* reference: https://www.floatui.com/components/cards */}
      <section className="mx-auto px-4 max-w-screen-lg mb-[200px]" id="blog">
      <div className="mt-4 before:block before:w-24 before:h-1 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-secondary">
        <h1 className="text-center sm:text-left text-3xl font-bold text-text1">
          <span className="text-primary">04. </span>
          Latest Blog Posts
        </h1>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-0">
          {/* Dev.to */}
          {/* {devArticles.map((key) => {
            return (
              <Card
                key={key.url}
                url={key.url}
                title={key.title}
                image_url={key.cover_image}
                date={key.created_at}
              />
            );
          })} */}

          {/* Hashnode */}
          {hashArticles.map((key) => {
            return (
              <Card
                key={key.node.slug}
                url={key.node.url}
                title={key.node.title}
                image_url={key.node.coverImage.url}
                date={key.node.publishedAt}
                // tags={key.brief}
              />
            );
          })}

        </div>
        <div className="mt-5 text-4xl flex px-4 md:px-0 justify-center">
          <span className="text-lg py-1 text-text2">
            Check out my other articles on{" "}
            <a
              href="https://ikabbash.hashnode.dev"
              target="_blank"
              className="text-secondary font-semibold hover:underline
            transition-all duration-500"
            >
              {" "}
              Hashnode
            </a><span>, </span>
            <a
              href="https://medium.com/@ikabbash"
              target="_blank"
              className="text-secondary font-semibold hover:underline
            transition-all duration-500"
            >
              Medium
            </a><span>, or </span>
            <a
              href="https://dev.to/ikabbash"
              target="_blank"
              className="text-secondary font-semibold hover:underline
            transition-all duration-500"
            >
              Dev.to
            </a>.
          </span>
        </div>
      </section>
    </>
  );
}
